document.addEventListener("DOMContentLoaded", function() {
  const shellContent = document.getElementById("shell-content");

  const shellCommands = [
    "$ whoami",
    "Harish Sarma Velavalapalli",
    "",
    "$ tree introduction",
    "|--- intro",
    "  |--- Hey There! 👋",
    "  |--- I'm Harish Sarma, a Passionate Engineer, based in India 🇮🇳.",
    "  |--- I love to do iOS automations & shortcuts workarounds, and staying in shape.",
    "  |--- enjoy reading books, and am a movie enthusiast.",
    "  |--- I believe in the power of continuous learning and the impact of coding in shaping the future.",
    "",
    "$ echo connect-with-me",
    "I'm excited to connect with like-minded individuals and share experiences.",
    "Let's connect and get to know each other! 👥"
  ];

  function typeCommand(command, index) {
    if (index < command.length) {
      shellContent.textContent += command.charAt(index);
      setTimeout(() => typeCommand(command, index + 1), 50);
    } else {
      shellContent.textContent += "\n";
      if (shellCommands.length > 0) {
        const nextCommand = shellCommands.shift();
        setTimeout(() => typeCommand(nextCommand, 0), 500);
      }
    }
  }

  if (shellCommands.length > 0) {
    const initialCommand = shellCommands.shift();
    typeCommand(initialCommand, 0);
  }
});
