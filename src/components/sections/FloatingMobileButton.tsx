import { motion } from "motion/react";
import { Zap } from "lucide-react";

export function FloatingMobileButton() {
  return (
    <div className="fixed bottom-4 left-0 right-0 z-50 sm:hidden">
      <div className="bg-gradient-to-t from-background via-background/80 to-transparent px-4 pb-4 pt-6">
        <motion.a
          href="#planos"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-primary px-4 py-4 text-base font-bold text-primary-foreground shadow-glow-strong animate-pulse-glow"
        >
          <Zap className="h-5 w-5" />
          Entrar para consultoria!
        </motion.a>
      </div>
    </div>
  );
}
