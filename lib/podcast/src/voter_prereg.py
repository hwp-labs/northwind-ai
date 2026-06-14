#!/usr/bin/env python3
"""
Voter Pre-Registration Data Model

Author: Northwind AI <northwindai.org>
Date: 2026-06-14
"""

from dataclasses import dataclass, field
from datetime import date
from enum import Enum
from typing import Optional, List, Tuple
import uuid

class Occupation(str, Enum):
    ARTISAN = "Artisan"
    BUSINESS = "Business Owner"
    CIVIL_SERVANT = "Civil Servant"
    FARMING_FISHING = "Farming/Fishing"
    HOUSE_WIFE = "House Wife"  # ???
    PUBLIC_SERVANT = "Public Servant"
    STUDENT = "Student"
    TRADING = "Trading"
    OTHER = "Other" # Private Sector

class OccupationV2(str, Enum):
    BUSINESS_OWNER = "Business Owner"
    CIVIL_PUBLIC_SERVANT = "Civil/Public Servant"
    EMPLOYED = "Employed"
    FARMER = "Farmer"
    HOMEMAKER = "Homemaker"
    MILITARY_SECURITY = "Military/Security"
    PROFESSIONAL = "Professional"
    RETIRED = "Retired"
    SELF_EMPLOYED = "Self-Employed"
    STUDENT = "Student"
    UNEMPLOYED = "Unemployed"
    OTHER = "Other"    

class Disability(str, Enum):
    NONE = "None"
    ALBINISM = "Albinism"
    AUTISM = "Autism"
    BLINDNESS = "Blindness"
    COGNITIVE = "Cognitive or Learning Disabilities"
    DEAFNESS = "Deafness"
    DOWNS_SYNDROME = "Downs Syndrome"
    LITTLE_STATURE = "Little Stature" # Dwarfism
    PHYSICAL_IMPEDIMENT = "Physical Impediment"
    SPINAL_CORD_INJURY = "Spinal Cord Injury" # Paralysis
    OTHERS = "Others"

class Education(str, Enum):
    NONE = "None"
    NOT_SPECIFIED = "Not Specified"
    PRIMARY = "Primary"
    SECONDARY = "Secondary"
    TERTIARY = "Tertiary"
    OTHERS = "Others"

class DocumentType(str, Enum):
    COURT_AFFIDAVIT = "Court Affidavit"
    EVIDENCE_OF_ADDR = "Evidence Of Address"
    IDENTITY_DOC = "Identity Document"
    NAME_CHANGE_PROOF = "Proof of Name Change"
    OTHER_SUPPORT_DOC = "Other Supporting Document"
    SIGNED_REQUEST = "Signed Letter of Request"

    OTHER_PROOF = "Other Proof"

@dataclass
class DateOfBirth:
    day: int
    month: int
    year: int

    def __post_init__(self):
        try:
            date(self.year, self.month, self.day)
        except ValueError as e:
            raise ValueError(f"Invalid Date Of Birth: {e}")    

@dataclass
class Document:
    doc_type: DocumentType
    doc_url: str

@dataclass
class Base:
    id: str = field(default_factory=lambda: str(uuid.uuid4())) # uuid
    created_at: date = field(default_factory=date.today)
    updated_at: date = field(default_factory=date.today)
    deleted_at: Optional[date] = None

    created_by: Optional[str] = None # uuid
    updated_by: Optional[str] = None
    deleted_by: Optional[str] = None    

@dataclass
class Applicant(Base):
    # BIO DATA
    surname: str
    first_name: str
    other_names: Optional[str] = None
    date_of_birth: DateOfBirth
    gender: str # Gender(str, Enum):
    email: str
    mobile_number: str
    home_address: str
    occupation: Occupation
    nationality: int # Country(int, Enum):
    nin: str # National Identification Number (Dial *346#)
    

    # ADDITIONAL INFO
    maiden_name: Optional[str] = None # DocumentType.NAME_CHANGE_PROOF
    disability: Disability # OR List[Disability]
    education: Education
    
    # ORIGIN INFO
    origin_country: int # Country(int, Enum):
    origin_state: int # State(int, Enum):
    origin_lga: int # LocalGovtArea(int, Enum):
    origin_town: str
    
    # BIRTH INFO
    birth_country: int # Country(int, Enum):
    birth_state: int # State(int, Enum):
    birth_lga: int # LocalGovtArea(int, Enum):
    
    # RESIDENCE
    residence_country: int # Country(int, Enum):
    residence_state: int # State(int, Enum):
    residence_lga: int # LocalGovtArea(int, Enum):
    
    # POLLING/VOTING UNIT
    polling_state: int # State(int, Enum):
    polling_lga: int # LocalGovtArea(int, Enum):
    polling_ward: int # PollingWard(int, Enum):
    polling_unit: int # PollingUnit(int, Enum):
    
    # SUPPORTING DOCS
    docs: Optional[List[Document]] = None
    photo_urls: Tuple[str, str] # ["photo.png", "photo-smile.png"]

    applicant_id: str # Ex. PRE51456257

