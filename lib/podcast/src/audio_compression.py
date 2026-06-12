#!/usr/bin/env python3
"""
Lossless Audio Compression Data Model

Author: Northwind AI <northwindai.org>
Date: 2026-06-12
"""

from dataclasses import dataclass, field
from typing import Dict, Any
import soundfile

@dataclass
class AudioFile:
    path: str
    channels: int
    bit_depth: int
    sample_rate: int
    duration_seconds: float
    metadata: Dict[str, Any] = field(default_factory=dict)

@dataclass
class WavFile(AudioFile):

    def to_flac(self, output_path: str):
        audio, sample_rate = soundfile.read(self.path)

        soundfile.write(
            output_path,
            audio,
            sample_rate,
            compression_level=5,
            format="FLAC",
            subtype="PCM_16"
        )

        return FlacFile(
            path=output_path,
            sample_rate=sample_rate,
            channels=self.channels,
            bit_depth=self.bit_depth,
            duration_seconds=self.duration_seconds,
            metadata=self.metadata,
        )

@dataclass
class FlacFile(AudioFile):
    compression_level: int = 5

    def to_wav(self, output_path: str):
        audio, sample_rate = soundfile.read(self.path)

        soundfile.write(
            output_path,
            audio,
            sample_rate,
            format="WAV",
            subtype="PCM_16"
        )

        return WavFile(
            path=output_path,
            sample_rate=sample_rate,
            channels=self.channels,
            bit_depth=self.bit_depth,
            duration_seconds=self.duration_seconds,
            metadata=self.metadata
        )

def main():
  PATH = "Music/Jesus_You_Are_Real_-_Jamiah_Godfrey.wav"
  METADATA = {
      "title": "Jesus You Are Real",
      "artist": "Jamiah Godfrey",
      "genre": "Gospel",
      "year": 2026,
      "copyright": "© 2026 Swift Records",
      "distributor": "Distrokid",
  }

  wav = WavFile(
      path=PATH,
      metadata=METADATA,
      duration_seconds=288, # 4:48 Minutes
      channels=2, # Stereo
      sample_rate=44100, # Hertz (Hz), CDQ
      bit_depth=16, # Bit, CDQ
  )
  flac = wav.to_flac(PATH.replace(".wav", ".flac"))

  print(flac.path, flac.metadata)

  