#!/usr/bin/env python3
"""
Basic Routine Medical Investigations Data Model

Author: Northwind AI <northwindai.org>
Date: 2026-05-30
"""

from dataclasses import dataclass, field
from datetime import date
from enum import Enum
from typing import List, Optional
import uuid

@dataclass
class UrineTest:
    glucose: Optional[float] = None
    protein: Optional[float] = None
    ph_level: Optional[float] = None

@dataclass
class BloodTest:
    hemoglobin: Optional[float] = None
    white_blood_cell_count: Optional[float] = None
    red_blood_cell_count: Optional[float] = None

@dataclass
class BloodPressure:
    systolic: Optional[float] = None
    diastolic: Optional[float] = None
    pulse_rate: Optional[int] = None

class BodyPart(str, Enum):
    SKULL = "skull"
    CHEST = "chest"
    ELBOW = "elbow"
    HIP = "hip"
    KNEE = "knee"
    # others

@dataclass
class XRay:
    body_part: Optional[BodyPart] = None
    image_url: Optional[str] = None
    findings: Optional[str] = None

@dataclass
class Electrocardiogram:
    heart_rate: Optional[int] = None
    rhythm: Optional[str] = None
    waveform: Optional[List[float]] = None

@dataclass
class Base:
    id: str = field(default_factory=lambda: str(uuid.uuid4())) # uuid
    created_at: date = field(default_factory=date.today)
    updated_at: date = field(default_factory=date.today)
    deleted_at: Optional[date] = None

    created_by: Optional[str] = None
    updated_by: Optional[str] = None
    deleted_by: Optional[str] = None

@dataclass
class RoutineInvestigation(Base):
    patient_id: str = ""
    
    urine_test: Optional[UrineTest] = None
    blood_test: Optional[BloodTest] = None
    blood_pressure: Optional[List[BloodPressure]] = None # track history
    x_ray: Optional[List[XRay]] = None # multiple body parts
    ecg: Optional[Electrocardiogram] = None

    ai_summary: Optional[str] = None






