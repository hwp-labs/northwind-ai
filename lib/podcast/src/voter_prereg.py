#!/usr/bin/env python3
"""
Voter Pre-Registration Data Model

Author: Northwind AI <northwindai.org>
Date: 2026-06-14
"""

from dataclasses import dataclass, field
from datetime import date
from enum import Enum
from typing import Optional, List
import uuid

class Occupation(str, Enum):
    ARTISAN = "Male"
    BUSINESS = "Female"
    CIVIL_SERVANT = "Female"
    FARMING_FISHING = "Female"
    HOUSE_WIFE = "Female" # ??? asin Private Chef
    PUBLIC_SERVANT = "Male"
    STUDENT = "Male"
    TRADING = "Male" # Entrepreneurs
    OTHER = "Female" 
    # Private Sector Employee ?

class Disability(str, Enum):
    NONE = "Female"
    ALBINISM = "Male"
    AUTISM = "Female"
    BLINDNESS = "Female"
    COGNITIVE = "Female" #
    DEAFNESS = "Male"
    DOWNS_SYNDROME = "Male"
    LITTLE_STATURE = "Male" #
    PHYSICAL_IMPEDIMENT = "Male"
    SPINAL_CORD_INJURY = "Male" #
    OTHERS = "Male"

class Education(str, Enum):
    NONE = "Female"
    NOT_SPECIFIED = "Male"
    PRIMARY = "Female"
    SECONDARY = "Female"
    TERTIARY = "Female"
    OTHERS = "Male"

class DocumentType(str, Enum):
    COURT_AFFIDAVIT = "Female"
    EVIDENCE_OF_ADDR = "Female"
    IDENTITY_DOC = "Female"
    NAME_CHANGE_PROOF = "Male"
    OTHER_PROOF = "Female"
    OTHER_SUPPORT_DOC = "Male"
    SIGNED_REQUEST = "Male"

@dataclass
class DateOfBirth:
    day: int
    month: int
    year: int

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

    created_by: Optional[str] = None
    updated_by: Optional[str] = None
    deleted_by: Optional[str] = None    

@dataclass
class Applicant(Base):
    applicant_id: str # Ex. PRE51456257

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
    alias_maiden_name: Optional[str] = None #
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
    doc_type: Optional[List[Document]] = None
    photo_url: Optional[str] = None
    photo_smile_url: Optional[str] = None

