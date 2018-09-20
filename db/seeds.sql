USE drugTracker_db;

INSERT INTO drugs
    (ndcNum, rxNum, name , drugName, drugForm, drugFormSize, drugFormMeasure, currentQty, bottleFullQty,
    bottlePartialQty, rxWritten, rxFilled, rxDiscard, rxReorder, drugDose, drugFreq, early, mid, late,
    instructions, precautions)

VALUES
    (333999, 444888, "Dr. Matlock", "Valium", "pill", 10 , "mg" , 30, 60, 10, "2018-09-17", "2018-09-17", "2019-01-01",
        "2018-12-17", 1, 3, true, false, false, "TAKE WITH WATER", "DO NOT DRIVE")
;

USE drugTracker_db;

INSERT INTO contacts
    (type, name, address, city, state, zip, locationId, email, phone)

VALUES
    ("Doctor", "Dr. Matlock", "789 South Southern Street", "Littleton", "CO", "80128",
        "RAF777", "drmatlock@realdoctor.com", "720-555-5555");

USE drugTracker_db;

INSERT INTO inventory
    (drugName, currentQty)

VALUES
    ("Valium", 30)


USE drugTracker_db;

INSERT INTO drugs
    (ndcNum, rxNum, phramName, doctorName , drugName, drugForm, drugFormSize, drugFormMeasure, currentQty, bottleFullQty,
    bottlePartialQty, rxWritten, rxFilled, rxDiscard, rxReorder, drugDose, drugFreq, early, middle, late,
    instructions, precautions)


VALUES
(13113, 45789, "Walgreens 2", "Dr. Smith" , "Amoxicylin", "pill", 100, "mg", 0, 90,
45, "2017-12-03", "2017-12-03", "2017-12-03", "2017-12-03", 1, 1, false, false, true, 
"instructions are here", "precautions arem here"),
(13113, 457911, "Walgreens 2", "Dr. Smith" , "Amoxicylin", "pill", 100, "mg", 0, 90,
0, "2017-12-04", "2017-12-04", "2017-12-04", "2017-12-04", 1, 1, false, false, true, 
"instructions are here", "precautions arem here"),
(13113, 45920, "Walgreens 2", "Dr. Smith" , "Amoxicylin", "pill", 100, "mg", 0, 90,
45, "2017-12-03", "2017-12-03", "2017-12-03", "2017-12-03", 1, 1, false, false, true, 
"instructions are here", "precautions arem here"),
(20023, 55123, "King Soopers 32", "Dr. Jones" , "Tylenex", "capsule", 150, "mg", 25, 90,
45, "2017-10-03", "2017-10-03", "2017-10-03", "2017-12-03", 1, 1, true, false, false, 
"instructions are still here here", "don't sneeze"),

(20023, 4555789, "King Soopers 32", "Dr. Jones" , "Tylenex", "capsule", 150, "mg", 25, 90,
45, "2017-12-03", "2017-12-15", "2017-12-15", "2017-12-15", 1, 1, true, false, false, 
"instructions are still here here", "don't sneeze"),
(20023, 123459, "King Soopers 32", "Dr. Jones" , "Tylenex", "capsule", 150, "mg", 25, 90,
45, "2017-12-03", "2017-12-03", "2017-12-03", "2017-12-03", 1, 1, true, false, false, 
"instructions are still here here", "don't sneeze"),
(20023, 4573239, "King Soopers 32", "Dr. Jones" , "Tylenex", "capsule", 150, "mg", 25, 90,
45, "2017-09-03", "2017-09-03", "2017-09-03", "2017-09-03", 1, 1, true, false, false, 
"instructions are still here here", "don't sneeze"),
(12345, 678910, "RiteAid #10", "Dr. Brown" , "Limpomatic", "tablet", 900, "g", 25, 120,
114, "2017-09-03", "2017-09-03", "2017-09-03", "2017-09-03", 1, 1, true, false, false, 
"instructions are still here here", "don't breathe"),
(12345, 14321, "RiteAid #10", "Dr. Brown" , "Limpomatic", "tablet", 900, "g", 25, 120,
0, "2017-09-03", "2017-09-03", "2017-09-03", "2017-09-03", 1, 1, true, false, false, 
"instructions are still here here", "don't breathe");
