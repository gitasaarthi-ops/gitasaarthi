'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bell, 
  BellRing, 
  Clock, 
  Volume2, 
  VolumeX, 
  Check, 
  X, 
  Sparkles, 
  Sun, 
  Moon, 
  Briefcase, 
  Heart,
  Plus,
  Trash2,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface SpiritualAlarm {
  id: string;
  labelEn: string;
  labelTe: string;
  time: string; // HH:mm format (e.g. "07:00")
  enabled: boolean;
  shlokaId: string;
  verseRef: string;
  sanskritLine: string;
  category: 'morning' | 'work' | 'evening' | 'night' | 'custom';
}

const DEFAULT_ALARMS: SpiritualAlarm[] = [
  {
    id: 'alarm_morning',
    labelEn: 'Morning Intention & Dhyana',
    labelTe: 'ఉదయపు ధ్యానం & సంకల్పం',
    time: '07:00',
    enabled: true,
    shlokaId: '6-5',
    verseRef: 'Gita 6.5',
    sanskritLine: 'उद्धरेदात्मनात्मानं నాత్మానమవసాదయేత్',
    category: 'morning'
  },
  {
    id: 'alarm_work',
    labelEn: 'Karma Yoga Mid-day Flow Reset',
    labelTe: 'మధ్యాహ్న కర్మయోగ రీసెట్',
    time: '11:00',
    enabled: true,
    shlokaId: '2-47',
    verseRef: 'Gita 2.47',
    sanskritLine: 'कर्मण्येवाधिकारस्ते మా ఫలేషు కదాచన',
    category: 'work'
  },
  {
    id: 'alarm_evening',
    labelEn: 'Evening Boundary & Family Sanctuary',
    labelTe: 'సాయంత్రపు శాంతి & కుటుంబ రక్షణ',
    time: '19:00',
    enabled: true,
    shlokaId: '12-15',
    verseRef: 'Gita 12.15',
    sanskritLine: 'यस्मान्नोद्विजते లోకో లోకాన్నోద్విజతే చ యః',
    category: 'evening'
  },
  {
    id: 'alarm_night',
    labelEn: 'Night Ocean Surrender & Deep Rest',
    labelTe: 'రాత్రివేళ పరమాత్మ సమర్పణ',
    time: '23:00',
    enabled: true,
    shlokaId: '2-70',
    verseRef: 'Gita 2.70',
    sanskritLine: 'आपूर्यमाणమచలప్రతిష్ఠం సముద్రమాపః ప్రవిశన్తి',
    category: 'night'
  }
];

export default function SpiritualAlarmModal({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const { language, t } = useLanguage();
  const [alarms, setAlarms] = useState<SpiritualAlarm[]>(DEFAULT_ALARMS);
  const [ringingAlarm, setRingingAlarm] = useState<SpiritualAlarm | null>(null);
  const [customTime, setCustomTime] = useState<string>('06:00');
  const [customLabel, setCustomLabel] = useState<string>('');
  const [showAddForm, setShowAddForm] = useState<boolean>(false);
  const [hasNotificationPermission, setHasNotificationPermission] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Load alarms from localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('gitasaarthi_alarms');
      if (saved) {
        setAlarms(JSON.parse(saved));
      }
    } catch {}

    // Check Notification API permission
    if (typeof window !== 'undefined' && 'Notification' in window) {
      setHasNotificationPermission(Notification.permission === 'granted');
    }
  }, []);

  // Save alarms to localStorage
  const saveAlarms = (newAlarms: SpiritualAlarm[]) => {
    setAlarms(newAlarms);
    try {
      localStorage.setItem('gitasaarthi_alarms', JSON.stringify(newAlarms));
    } catch {}
  };

  // Toggle alarm enable/disable
  const toggleAlarm = (id: string) => {
    const updated = alarms.map((a) => (a.id === id ? { ...a, enabled: !a.enabled } : a));
    saveAlarms(updated);
  };

  // Delete alarm
  const deleteAlarm = (id: string) => {
    const updated = alarms.filter((a) => a.id !== id);
    saveAlarms(updated);
  };

  // Add custom alarm
  const addCustomAlarm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customTime) return;

    const newAlarm: SpiritualAlarm = {
      id: `alarm_${Date.now()}`,
      labelEn: customLabel || 'Sacred Gita Pause',
      labelTe: customLabel || 'గీతా ప్రశాంత స్మరణ',
      time: customTime,
      enabled: true,
      shlokaId: '18-66',
      verseRef: 'Gita 18.66',
      sanskritLine: 'सर्वधर्मान्परित्यజ్య మామేకం శరణం వ్రజ',
      category: 'custom'
    };

    saveAlarms([...alarms, newAlarm]);
    setCustomLabel('');
    setShowAddForm(false);
  };

  // Request browser notification permission
  const requestNotificationPermission = async () => {
    if (typeof window !== 'undefined' && 'Notification' in window) {
      const permission = await Notification.requestPermission();
      setHasNotificationPermission(permission === 'granted');
    }
  };

  // Play sacred gong or chanting sound
  const playSacredChime = () => {
    try {
      if (!audioRef.current) {
        audioRef.current = new Audio('/welcome.mp3');
        audioRef.current.volume = 0.9;
      }
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => {});
    } catch {}
  };

  // Stop sound
  const stopSacredChime = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  // Live Timer Check: checks every second if any alarm matches current time
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const currentHours = String(now.getHours()).padStart(2, '0');
      const currentMinutes = String(now.getMinutes()).padStart(2, '0');
      const currentSeconds = now.getSeconds();
      const currentTimeString = `${currentHours}:${currentMinutes}`;

      // Trigger at the 00-second mark of the matching minute
      if (currentSeconds === 0) {
        const matched = alarms.find((a) => a.enabled && a.time === currentTimeString);
        if (matched) {
          triggerAlarm(matched);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [alarms]);

  const triggerAlarm = (alarm: SpiritualAlarm) => {
    setRingingAlarm(alarm);
    playSacredChime();

    // Trigger Native Notification if permitted
    if (typeof window !== 'undefined' && 'Notification' in window && Notification.permission === 'granted') {
      new Notification(`🕉️ GitaSaarthi: ${alarm.labelEn}`, {
        body: `${alarm.verseRef}: ${alarm.sanskritLine}\nTake 60 seconds to recenter.`,
        icon: '/icon-192.png'
      });
    }
  };

  const dismissRinging = () => {
    stopSacredChime();
    setRingingAlarm(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4 select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-[#E7E3DD] flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="px-6 py-4 border-b border-[#E7E3DD] bg-[#FAF8F5] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-2xl bg-[#FEF3C7] text-[#853F00] flex items-center justify-center shadow-xs">
              <BellRing className="w-5 h-5 text-[#D97706]" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-[#1E1B18]">
                {language === 'te' ? 'ఆధ్యాత్మిక అలారం & స్మరణ' : 'Spiritual Routine Alarms'}
              </h2>
              <p className="text-[11px] text-[#82756B] font-medium">
                {language === 'te' ? 'గీతా శ్లోకాలతో కూడిన దినచర్య అలారాలు' : 'Sacred shloka reminders for each 24-hr milestone'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#82756B] hover:text-[#1E1B18] hover:bg-[#E7E3DD]/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content List */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {/* Browser Notification Banner if not granted */}
          {!hasNotificationPermission && (
            <div className="p-3.5 rounded-2xl bg-[#FEF3C7]/60 border border-[#FDE68A] flex items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-[#853F00]">
                <AlertCircle className="w-4 h-4 shrink-0 text-[#D97706]" />
                <span className="font-medium">
                  {language === 'te'
                    ? 'బ్రౌజర్ నోటిఫికేషన్లను అనుమతించండి'
                    : 'Enable browser alerts to receive shlokas on time'}
                </span>
              </div>
              <button
                onClick={requestNotificationPermission}
                className="px-3 py-1.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white font-bold text-[11px] shrink-0 cursor-pointer shadow-xs transition-colors"
              >
                Allow
              </button>
            </div>
          )}

          {/* Alarms List */}
          <div className="space-y-3">
            {alarms.map((alarm) => {
              const label = language === 'te' ? alarm.labelTe : alarm.labelEn;
              const Icon = alarm.category === 'morning' ? Sun : alarm.category === 'work' ? Briefcase : alarm.category === 'evening' ? Heart : Moon;

              return (
                <div
                  key={alarm.id}
                  className={`p-4 rounded-2xl border transition-all flex items-center justify-between gap-3 ${
                    alarm.enabled
                      ? 'bg-white border-[#E7E3DD] shadow-xs'
                      : 'bg-[#FAF8F5]/60 border-transparent opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-2xl flex items-center justify-center shrink-0 ${
                        alarm.enabled
                          ? 'bg-[#FEF3C7] text-[#853F00]'
                          : 'bg-[#E7E3DD] text-[#82756B]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-black font-mono tracking-tight text-[#1E1B18]">
                          {alarm.time}
                        </span>
                        <span className="px-2 py-0.5 rounded-md bg-[#FEF3C7] text-[#853F00] font-bold text-[10px]">
                          {alarm.verseRef}
                        </span>
                      </div>
                      <h4 className="text-xs font-bold text-[#1E1B18] mt-0.5">{label}</h4>
                      <p className="text-[11px] text-[#82756B] font-serif italic truncate max-w-xs">
                        &ldquo;{alarm.sanskritLine}&rdquo;
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Test Chime Trigger */}
                    <button
                      onClick={() => triggerAlarm(alarm)}
                      title="Test Alarm Sound"
                      className="p-2 rounded-xl text-[#82756B] hover:text-[#D97706] hover:bg-[#FAF8F5] transition-colors cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>

                    {/* Toggle Switch */}
                    <button
                      onClick={() => toggleAlarm(alarm.id)}
                      className={`w-12 h-7 rounded-full p-1 transition-colors cursor-pointer flex items-center ${
                        alarm.enabled ? 'bg-[#0F5132]' : 'bg-[#E7E3DD]'
                      }`}
                    >
                      <motion.div
                        layout
                        className={`w-5 h-5 rounded-full bg-white shadow-md ${
                          alarm.enabled ? 'ml-auto' : 'mr-auto'
                        }`}
                      />
                    </button>

                    {/* Delete Custom Alarm */}
                    {alarm.category === 'custom' && (
                      <button
                        onClick={() => deleteAlarm(alarm.id)}
                        className="p-1.5 text-rose-500 hover:text-rose-700 cursor-pointer"
                        title="Delete Alarm"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Add Custom Alarm Button or Form */}
          {!showAddForm ? (
            <button
              onClick={() => setShowAddForm(true)}
              className="w-full py-3 rounded-2xl border-2 border-dashed border-[#E7E3DD] hover:border-[#D97706] text-[#50453D] hover:text-[#D97706] text-xs font-bold flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>{language === 'te' ? '+ ప్రత్యేక అలారం జోడించండి' : '+ Add Custom Spiritual Reminder'}</span>
            </button>
          ) : (
            <form onSubmit={addCustomAlarm} className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E3DD] space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-[#1E1B18]">New Alarm Setting</span>
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="text-xs text-[#82756B] hover:text-[#1E1B18]"
                >
                  Cancel
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] font-bold text-[#82756B] block mb-1">Time (24h)</label>
                  <input
                    type="time"
                    value={customTime}
                    onChange={(e) => setCustomTime(e.target.value)}
                    required
                    className="w-full px-3 py-2 text-xs font-mono font-bold rounded-xl border border-[#E7E3DD] bg-white text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold text-[#82756B] block mb-1">Reminder Label</label>
                  <input
                    type="text"
                    value={customLabel}
                    onChange={(e) => setCustomLabel(e.target.value)}
                    placeholder="e.g. Afternoon Gita Pause"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-[#E7E3DD] bg-white text-[#1E1B18] focus:outline-none focus:ring-2 focus:ring-[#D97706]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-[#D97706] hover:bg-[#B45309] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
              >
                Save Alarm
              </button>
            </form>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-[#E7E3DD] bg-[#FAF8F5] flex items-center justify-between text-xs text-[#82756B]">
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Alarms chime with sacred Shankha &amp; Chants</span>
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-xl bg-[#1E1B18] text-white font-bold hover:bg-[#332E29] transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </motion.div>

      {/* Ringing Alarm Modal Screen Overlay */}
      {ringingAlarm && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="fixed inset-0 z-60 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg"
        >
          <div className="max-w-sm w-full bg-[#1A1208] text-white rounded-3xl p-6 border-2 border-amber-500/50 shadow-[0_0_50px_rgba(217,119,6,0.5)] text-center space-y-5">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-16 h-16 rounded-full bg-gradient-to-tr from-amber-600 to-yellow-400 text-white flex items-center justify-center mx-auto shadow-lg"
            >
              <BellRing className="w-8 h-8" />
            </motion.div>

            <div>
              <span className="text-xs font-bold font-mono tracking-widest uppercase text-amber-400">
                {ringingAlarm.verseRef} • Sacred Pause
              </span>
              <h3 className="text-2xl font-black text-white mt-1">
                {language === 'te' ? ringingAlarm.labelTe : ringingAlarm.labelEn}
              </h3>
            </div>

            <div className="p-4 rounded-2xl bg-black/40 border border-amber-500/30">
              <p className="text-base font-serif font-bold text-amber-200 leading-relaxed">
                &ldquo;{ringingAlarm.sanskritLine}&rdquo;
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={dismissRinging}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-[#D97706] to-[#B45309] text-white font-bold text-sm shadow-lg hover:brightness-110 active:scale-98 transition-all cursor-pointer"
              >
                I Am Ready • Disengage Alarm
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
