import wave
import math
import struct
import os

def generate_sacred_welcome_audio(output_path="public/welcome.wav", duration=10.0, sample_rate=44100):
    total_samples = int(duration * sample_rate)
    
    # 16-bit PCM Stereo
    samples = []
    
    for i in range(total_samples):
        t = i / sample_rate
        
        # 1. Master Envelope (Smooth fade-in at start, graceful fade-out at end)
        master_env = 1.0
        if t < 0.4:
            master_env = 0.5 * (1 - math.cos(math.pi * t / 0.4))
        elif t > 8.2:
            decay_t = (t - 8.2) / 1.8
            master_env = math.exp(-2.5 * decay_t) * 0.5 * (1 + math.cos(math.pi * decay_t))
            
        # 2. Cosmic Om Drone (136.1 Hz - Indian Classical Sadja / Om Frequency)
        # Dual detuned oscillators for rich warm chorusing
        f_om = 136.1
        drone_l = 0.22 * math.sin(2 * math.pi * f_om * t) + 0.12 * math.sin(2 * math.pi * (f_om * 2) * t)
        drone_r = 0.22 * math.sin(2 * math.pi * (f_om + 0.35) * t) + 0.12 * math.sin(2 * math.pi * (f_om * 2 + 0.5) * t)
        
        # Sub-bass warmth (68.05 Hz)
        sub = 0.14 * math.sin(2 * math.pi * (f_om * 0.5) * t)
        drone_l += sub
        drone_r += sub

        # 3. Sacred Temple Singing Bowl / Bell Strike (Triggered at t = 0.15s)
        bell_l = 0.0
        bell_r = 0.0
        if t >= 0.15:
            tb = t - 0.15
            # Multi-harmonic strike
            decay_main = math.exp(-0.65 * tb)
            decay_high = math.exp(-1.2 * tb)
            decay_shimmer = math.exp(-1.9 * tb)
            
            f_bell = 432.0 # Healing harmonic frequency
            b1 = 0.35 * math.sin(2 * math.pi * f_bell * tb) * decay_main
            b2 = 0.20 * math.sin(2 * math.pi * (f_bell * 2.02) * tb) * decay_high # Slight inharmonicity
            b3 = 0.12 * math.sin(2 * math.pi * (f_bell * 3.01) * tb) * decay_high
            b4 = 0.08 * math.sin(2 * math.pi * (f_bell * 4.15) * tb) * decay_shimmer
            b5 = 0.05 * math.sin(2 * math.pi * (f_bell * 5.8) * tb) * decay_shimmer
            
            # Subtle tremolo (warm beating)
            tremolo = 1.0 + 0.15 * math.sin(2 * math.pi * 3.5 * tb)
            
            bell_l = (b1 + b2 * 0.8 + b3 * 1.1 + b4 * 0.7 + b5 * 1.2) * tremolo
            bell_r = (b1 + b2 * 1.1 + b3 * 0.8 + b4 * 1.2 + b5 * 0.7) * tremolo

        # 4. Sacred Shankha (Conch) Resonant Swell (Peaks between 1.2s and 6.0s)
        shankha_l = 0.0
        shankha_r = 0.0
        if 0.8 <= t <= 8.8:
            ts = t - 0.8
            # Swell envelope
            if ts < 1.5:
                s_env = 0.5 * (1 - math.cos(math.pi * ts / 1.5))
            elif ts < 5.5:
                s_env = 1.0
            else:
                s_env = 0.5 * (1 + math.cos(math.pi * (ts - 5.5) / 2.5))
                
            f_shankha = 272.2 # Octave above 136.1 Hz
            # Conch vibrato
            vibrato = 3.5 * math.sin(2 * math.pi * 4.8 * ts)
            f_inst = f_shankha + vibrato
            
            # Formant rich sound
            s_val = (
                0.20 * math.sin(2 * math.pi * f_inst * ts) +
                0.15 * math.sin(2 * math.pi * (f_inst * 2) * ts) +
                0.10 * math.sin(2 * math.pi * (f_inst * 3) * ts) +
                0.05 * math.sin(2 * math.pi * (f_inst * 4) * ts)
            ) * s_env
            
            shankha_l = s_val * 0.95
            shankha_r = s_val * 1.05

        # 5. Celestial Sparkle (Twinkling chimes that match the shimmer sweep)
        chime_l = 0.0
        chime_r = 0.0
        if 1.0 <= t <= 8.5:
            tc = t - 1.0
            # Series of gentle metallic pings
            for ping_time, ping_freq in [(0.2, 1728.0), (1.0, 2160.0), (2.2, 2592.0), (3.6, 3024.0), (5.0, 2160.0), (6.4, 2592.0), (7.5, 3456.0)]:
                if tc >= ping_time:
                    tp = tc - ping_time
                    ping_dec = math.exp(-3.5 * tp)
                    val = 0.04 * math.sin(2 * math.pi * ping_freq * tp) * ping_dec
                    chime_l += val
                    chime_r += val * 0.85

        # Combine all layers
        total_l = (drone_l + bell_l + shankha_l + chime_l) * master_env
        total_r = (drone_r + bell_r + shankha_r + chime_r) * master_env
        
        # Soft limiting / tanh compression to avoid any digital clipping
        out_l = math.tanh(total_l * 0.9)
        out_r = math.tanh(total_r * 0.9)
        
        # Convert to 16-bit PCM (-32768 to 32767)
        int_l = int(max(-32767, min(32767, out_l * 30000)))
        int_r = int(max(-32767, min(32767, out_r * 30000)))
        
        samples.append(struct.pack('<hh', int_l, int_r))
        
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    with wave.open(output_path, 'wb') as wav_file:
        wav_file.setnchannels(2)      # Stereo
        wav_file.setsampwidth(2)      # 16-bit
        wav_file.setframerate(sample_rate)
        wav_file.writeframes(b''.join(samples))
        
    print(f"Generated sacred welcome audio at: {output_path} ({duration}s, {sample_rate}Hz)")

if __name__ == "__main__":
    generate_sacred_welcome_audio()
