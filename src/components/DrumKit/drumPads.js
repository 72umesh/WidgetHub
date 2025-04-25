import clap from "./sounds/clap.wav";
import hihat from "./sounds/hihat.wav";
import kick from "./sounds/kick.wav";
import openhat from "./sounds/openhat.wav";
import boom from "./sounds/boom.wav";
import ride from "./sounds/ride.wav";
import snare from "./sounds/snare.wav";
import tom from "./sounds/tom.wav";
import tink from "./sounds/tink.wav";

const drumPadsdata = [
  { key: "A", label: "clap", audio: clap },
  { key: "S", label: "hihat", audio: hihat },
  { key: "D", label: "kick", audio: kick },
  { key: "F", label: "openhat", audio: openhat },
  { key: "G", label: "boom", audio: boom },
  { key: "H", label: "ride", audio: ride },
  { key: "J", label: "snare", audio: snare },
  { key: "K", label: "tom", audio: tom },
  { key: "L", label: "tink", audio: tink },
];

export default drumPadsdata;
