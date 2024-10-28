import { Button } from "./ui/button";
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      className="border"
      onClick={toggleTheme}
    >
      {theme === "light" ? (
        <Moon className="h-[1.1rem] w-[1.2rem]" />
      ) : (
        <Sun className="h-[1.1rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}