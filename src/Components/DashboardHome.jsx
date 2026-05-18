import { useState } from 'react';
import { motion } from 'framer-motion';

import {
  ImagePlus,
  ChevronDown,
  ArrowRight,
  Send,
  Images,
  Download,
  Expand,
  User,
  Wand2,
  RefreshCw,
  Pencil,
  Sparkles,
} from 'lucide-react';

// HERO IMAGE
import heroFashion from '../assets/dashboard/hero-fashion.jpg';

// CARD IMAGES
import productToModel from '../assets/cards/product-to-model.jpg';
import tryOn from '../assets/cards/try-on.jpg';
import createModel from '../assets/cards/create-model.jpg';
import modelSwap from '../assets/cards/model-swap.jpg';
import editFashion from '../assets/cards/edit-fashion.jpg';

const featureCards = [
  {
    slot: productToModel,
    icon: <User size={13} />,
    label: 'Product to Model',
    description:
      'Turn wearable product images into professional model photography',
  },
  {
    slot: tryOn,
    icon: <Wand2 size={13} />,
    label: 'Try-On',
    description:
      'Visualize how an outfit worn by one model looks on different models',
  },
  {
    slot: createModel,
    icon: <Sparkles size={13} />,
    label: 'Create Model',
    description:
      'Create a unique AI model using a text prompt or reference image',
  },
  {
    slot: modelSwap,
    icon: <RefreshCw size={13} />,
    label: 'Model Swap',
    description:
      'Change the model while preserving the pose and garment details',
  },
  {
    slot: editFashion,
    icon: <Pencil size={13} />,
    label: 'Edit',
    description:
      'Change color, pose, background and more with a single prompt',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: 'easeOut',
    },
  },
};

export default function DashboardHome() {
  const [prompt, setPrompt] = useState('');

  return (
    <div className="bg-[#F5F5F5]">
      <main className="flex-1 overflow-y-auto pb-28 md:pb-10">
        <div className="w-full px-3 md:px-4 py-2">
          {/* ── HERO SECTION ── */}
          <motion.section
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
            className="mb-10"
          >
            <div className="bg-white rounded-[28px] border border-[#E5E5E5] overflow-hidden shadow-sm">

              <div className="flex flex-col md:flex-row items-stretch h-auto md:h-[420px]">

                {/* Left — image */}
                <motion.div
                  variants={fadeInUp}
                  className="md:w-[52%] relative overflow-hidden h-[320px] md:h-full"
                >
                  <img
                    src={heroFashion}
                    alt="Virtual Try-On fashion models"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
                </motion.div>

                {/* Right — text */}
                <motion.div
                  variants={fadeInUp}
                  className="md:w-[48%] flex flex-col justify-center px-8 py-10 md:py-12"
                >
                  <span className="text-[10px] font-semibold tracking-[0.2em] text-[#AAAAAA] uppercase mb-3">
                    Outfit Changer
                  </span>

                  <h1
                    className="text-4xl md:text-5xl font-bold text-[#111111] leading-tight mb-4"
                    style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
                  >
                    Virtual Try-On
                  </h1>

                  <p className="text-[#666666] text-base leading-relaxed mb-8 max-w-sm">
                    Produce scalable AI fashion catalog content with virtual
                    try-on technology. Instantly change outfits on AI models
                    without re-shooting.
                  </p>

                  <div className="flex items-center gap-4">
                    <button className="px-6 py-2.5 rounded-xl border-2 border-[#111111] text-[#111111] text-sm font-semibold hover:bg-[#111111] hover:text-white transition-all duration-200">
                      Try-On Studio
                    </button>

                    <button className="flex items-center gap-1.5 text-sm font-medium text-[#555555] hover:text-[#111111] transition-colors duration-150">
                      Learn More <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* ── PROMPT INPUT SECTION ── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="mb-10"
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-[#111111] mb-5"
              style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
            >
              What will your next photoshoot be?
            </h2>

            <div className="bg-white rounded-2xl border border-[#E5E5E5] shadow-sm overflow-hidden">
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="Describe anything you want to create..."
                rows={3}
                className="w-full px-5 pt-5 pb-3 text-sm text-[#333333] placeholder-[#BBBBBB] resize-none outline-none bg-transparent leading-relaxed"
              />

              <div className="flex items-center justify-between px-4 pb-4 pt-1">
                {/* Add images */}
                <button className="flex items-center gap-2 px-3.5 py-2 rounded-xl border border-[#E5E5E5] text-sm text-[#555555] hover:bg-[#F5F5F5] hover:border-[#CCCCCC] transition-all duration-150">
                  <ImagePlus size={15} className="text-[#888888]" />

                  <span className="font-medium">Add Images</span>

                  <ChevronDown
                    size={13}
                    className="text-[#AAAAAA]"
                  />
                </button>

                {/* Generate */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-xl bg-[#111111] flex items-center justify-center hover:bg-[#333333] transition-colors duration-150 shadow-sm"
                >
                  <Send size={15} className="text-white" />
                </motion.button>
              </div>
            </div>
          </motion.section>

          {/* ── FEATURE CARDS ── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.07,
                },
              },
            }}
            className="mb-10"
          >
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
              {featureCards.map((card) => (
                <motion.div
                  key={card.label}
                  variants={fadeInUp}
                  whileHover={{
                    y: -4,
                    boxShadow: '0 12px 32px rgba(0,0,0,0.14)',
                  }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeOut',
                  }}
                  className="relative flex-shrink-0 w-52 md:w-56 h-60 rounded-2xl overflow-hidden cursor-pointer border border-[#E5E5E5]"
                >
                  {/* Background image */}
                  <img
                    src={card.slot}
                    alt={card.label}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />

                  {/* Center pill */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white text-xs font-semibold">
                      {card.icon}
                      {card.label}
                    </div>
                  </div>

                  {/* Bottom description */}
                  <div className="absolute bottom-0 left-0 right-0 px-3.5 pb-3.5">
                    <p className="text-white/80 text-[11px] leading-snug line-clamp-2">
                      {card.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* ── RECENT GENERATIONS ── */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="flex items-center gap-2.5 mb-5">
              <h2
                className="text-xl font-bold text-[#111111]"
                style={{ fontFamily: 'Georgia, Times New Roman, serif' }}
              >
                Recent Generations
              </h2>

              <div className="w-7 h-7 rounded-lg bg-[#F0F0F0] flex items-center justify-center">
                <Images size={14} className="text-[#888888]" />
              </div>
            </div>

            {/* Empty state */}
            <div className="bg-white rounded-2xl border border-[#E5E5E5] shadow-sm px-8 py-14 text-center">
              <div className="w-14 h-14 rounded-2xl bg-[#F5F5F5] border border-[#EBEBEB] flex items-center justify-center mx-auto mb-4">
                <Images size={22} className="text-[#CCCCCC]" />
              </div>

              <p className="text-[#888888] text-sm leading-relaxed">
                No generations yet.{' '}
                <a
                  href="/studio"
                  className="text-[#111111] font-semibold underline underline-offset-2 hover:text-[#555555] transition-colors"
                >
                  Head to the studio
                </a>{' '}
                to start creating.
              </p>
            </div>

            {/* Grid placeholder */}
            <div className="hidden grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="relative aspect-[3/4] rounded-xl overflow-hidden bg-[#F0F0F0] border border-[#E5E5E5] group cursor-pointer"
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                    <button className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                      <Download
                        size={14}
                        className="text-[#111111]"
                      />
                    </button>

                    <button className="w-8 h-8 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors">
                      <Expand
                        size={14}
                        className="text-[#111111]"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
}