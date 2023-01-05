import { FiMoon, FiSun } from "solid-icons/fi";
import { createSignal, onMount, Show } from "solid-js";

type Theme = "light" | "dark";

const setClass = (theme: Theme) => {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
};

const setStorage = (theme: Theme) => {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Do nothing.
  }
};

const LightIcon = () => (
  <>
    <FiSun size={24} title="Sun" />
    <span class="sr-only">Switch to light mode</span>
  </>
);

const DarkIcon = () => (
  <>
    <FiMoon size={24} title="Moon" />
    <span class="sr-only">Switch to dark mode</span>
  </>
);

const ThemeSwitcher = () => {
  const [theme, setTheme] = createSignal<Theme>("dark");

  onMount(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  });

  const toggle = () => {
    const newTheme = theme() === "light" ? "dark" : "light";
    setTheme(newTheme);
    setClass(newTheme);
    setStorage(newTheme);
  };

  return (
    <button
      onClick={toggle}
      class="p-2 rounded hover:bg-gray-4 dark:hover:bg-graydark-4 active:bg-gray-5 dark:active:bg-graydark-5"
    >
      <Show
        when={theme() === "light"}
        fallback={<FiMoon size={24} title="Moon" />}
      >
        <FiSun size={24} title="Sun" />
      </Show>
    </button>
  );
};

export default ThemeSwitcher;
