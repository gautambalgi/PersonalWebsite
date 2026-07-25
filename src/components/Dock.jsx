import { useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Home,
  User,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Mail,
} from "lucide-react";

// Each item navigates to a page route.
const items = [
  { title: "Home", icon: Home, path: "/" },
  { title: "About", icon: User, path: "/about" },
  { title: "Projects", icon: FolderGit2, path: "/projects" },
  { title: "Experience", icon: Briefcase, path: "/experience" },
  { title: "Education", icon: GraduationCap, path: "/education" },
  { title: "Contact", icon: Mail, path: "/contact" },
];

const BASE = 44;      // resting icon size
const MAG = 68;       // magnified size on hover
const DISTANCE = 130; // how far from cursor the magnify reaches
const SPRING = { mass: 0.1, stiffness: 150, damping: 12 };

export default function Dock() {
  const mouseX = useMotionValue(Infinity);
  return (
    <div className="dock-wrap">
      <div
        className="dock"
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
      >
        {items.map((it) => (
          <DockItem key={it.title} item={it} mouseX={mouseX} />
        ))}
      </div>
    </div>
  );
}

function DockItem({ item, mouseX }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const active = location.pathname === item.path;

  const distance = useTransform(mouseX, (val) => {
    const rect = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - rect.x - rect.width / 2;
  });
  const sizeTarget = useTransform(distance, [-DISTANCE, 0, DISTANCE], [BASE, MAG, BASE]);
  const size = useSpring(sizeTarget, SPRING);

  const Icon = item.icon;

  return (
    <motion.button
      ref={ref}
      style={{ width: size, height: size }}
      className={`dock-item${active ? " active" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      onClick={() => navigate(item.path)}
      aria-label={item.title}
    >
      <AnimatePresence>
        {hovered && (
          <motion.span
            className="dock-label"
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: -10 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.15 }}
          >
            {item.title}
          </motion.span>
        )}
      </AnimatePresence>
      <Icon className="dock-icon" />
    </motion.button>
  );
}