

=======
USE drugTracker_db;

INSERT INTO contacts
    (pharmName, doctorName, address, city, state, zip, locationId, email, phone)

VALUES
    ("Walgreens", "Dr. Matlock", "789 South Southern Street", "Littleton", "CO", "80128",
        "RAF777", "drmatlock@realdoctor.com", "720-555-5555")



INSERT INTO contacts
    (type, name, address, city, state, zip, locationId, email, phone)

VALUES
    ("Doctor", "Dr. Matlock", "789 South Southern Street", "Littleton", "CO", "80128",
        "RAF777", "drmatlock@realdoctor.com", "720-555-5555");




-- new seeds for demo


USE drugTracker_db;

INSERT INTO drugs
    
    (ndcNum, rxNum, pharmName, doctorName , drugName, drugForm, drugFormSize, drugFormMeasure, currentQty, bottleFullQty,
    bottlePartialQty, rxWritten, rxFilled, rxDiscard, rxReorder, drugDose, drugFreq, early, middle, late,
    instructions, precautions)


VALUES

(13113, 45789, "Walgreens 2", "Dr. Smith" , "Amoxicylin", "pill", 100, "mg", 0, 90,
45, "2017-12-03", "2017-12-03", "2017-12-03", "2017-12-03", 1, 1, true, false, true, 
"instructions are here", "precautions arem here"),
(13113, 457911, "Walgreens 2", "Dr. Smith" , "Amoxicylin", "pill", 100, "mg", 0, 90,
0, "2017-12-04", "2017-12-04", "2017-12-04", "2017-12-04", 1, 1, false, false, false, 
"instructions are here", "precautions arem here"),
(13113, 45920, "Walgreens 2", "Dr. Smith" , "Amoxicylin", "pill", 100, "mg", 0, 90,
45, "2017-12-03", "2017-12-03", "2017-12-03", "2017-12-03", 1, 1, false, false, false, 
"instructions are here", "precautions arem here"),
(20023, 55123, "King Soopers 32", "Dr. Jones" , "Tylenex", "capsule", 150, "mg", 25, 90,
45, "2017-10-03", "2017-10-03", "2017-10-03", "2017-12-03", 1, 1, true, true, true, 
"instructions are still here here", "don't sneeze"),

(20023, 4555789, "King Soopers 32", "Dr. Jones" , "Tylenex", "capsule", 150, "mg", 25, 90,
45, "2017-12-03", "2017-12-15", "2017-12-15", "2017-12-15", 1, 1, false, false, false, 
"instructions are still here here", "don't sneeze"),
(20023, 123459, "King Soopers 32", "Dr. Jones" , "Tylenex", "capsule", 150, "mg", 25, 90,
45, "2017-12-03", "2017-12-03", "2017-12-03", "2017-12-03", 1, 1, false, false, false, 
"instructions are still here here", "don't sneeze"),
(20023, 4573239, "King Soopers 32", "Dr. Jones" , "Tylenex", "capsule", 150, "mg", 25, 90,
45, "2017-09-03", "2017-09-03", "2017-09-03", "2017-09-03", 1, 1, false, false, false, 
"instructions are still here here", "don't sneeze"),
(12345, 678910, "RiteAid #10", "Dr. Brown" , "Limpomatic", "tablet", 900, "g", 25, 120,
114, "2017-09-03", "2017-09-03", "2017-09-03", "2017-09-03", 1, 1, true, true, false, 
"instructions are still here here", "don't breathe"),
(12345, 14321, "RiteAid #10", "Dr. Brown" , "Limpomatic", "tablet", 900, "g", 25, 120,
0, "2017-09-03", "2017-09-03", "2017-09-03", "2017-09-03", 1, 1, false, false, false, 
"instructions are still here here", "don't breathe");
=======

(13113, 45789, "Walgreens 2", "Dr. Smith" , "Amoxicylin", "pill", 100, "mg", 61, 90,
45, "2017-12-03", "2017-12-03", "2017-12-03", "2017-12-03", 1, 3, false, false, true, 
"take with 3 glasses full of water", "stay close to a bathroom"),
(13112, 457911, "Walgreens 2", "Dr. Smith" , "Amoxicylin", "pill", 100, "mg", 61, 90,
0, "2017-12-04", "2017-12-04", "2017-12-04", "2017-12-04", 1, 3, false, true, false, 
"take with 3 glasses full of water", "stay close to a bathroom"),
(13114, 45920, "Walgreens 2", "Dr. Smith" , "Amoxicylin", "pill", 100, "mg", 61, 90,
45, "2017-12-03", "2017-12-03", "2017-12-03", "2017-12-03", 1, 3, true, false, true, 
"take with 3 glasses full of water", "stay close to a bathroom"),

(20023, 55123, "King Soopers 32", "Dr. Jones" , "Tylenex", "capsule", 150, "mg", 9, 90,
45, "2017-10-03", "2017-10-03", "2017-10-03", "2017-12-03", 1, 2, true, false, false, 
"instructions are still here here", "don't sneeze"),

(20026, 4555789, "King Soopers 32", "Dr. Jones" , "Moresleepex", "liquid", 150, "mL", 25, 90,
45, "2017-12-03", "2017-12-15", "2017-12-15", "2017-12-15", 1, 1, true, false, true, 
"watch tv after taking", "Do not watch the news"),
(20023, 123459, "King Soopers 32", "Dr. Jones" , "Moresleepex", "liquid", 150, "mL", 25, 90,
45, "2017-12-03", "2017-12-03", "2017-12-03", "2017-12-03", 1, 1, true, false, false, 
"watch tv after taking", "Do not watch the news"),

(12345, 678910, "RiteAid #10", "Dr. Brown" , "Limpomoxin", "tablet", 900, "g", 3, 120,
114, "2017-09-03", "2017-09-03", "2017-09-03", "2017-09-03", 1, 1, true, false, false, 
"jump up and down while taking", "do not operate machinery"),
(12347, 14321, "RiteAid #10", "Dr. Brown" , "Limpomoxin", "tablet", 900, "g", 3, 120,
0, "2017-09-03", "2017-09-03", "2017-09-03", "2017-09-03", 1, 1, false, true, false, 
"jump up and down while taking", "do not operate machinery"),

(12347, 14321, "RiteAid #10", "Dr. Jones" , "StressEze", "tablet", 2000, "mg", 12, 120,
0, "2017-09-03", "2017-09-03", "2017-09-03", "2017-09-03", 1, 1, false, true, false, 
"take with 2 glasses of wine", "do not fight with spouse before taking"),

(12347, 14321, "RiteAid #10", "Dr. Jones" , "Wakeuppercyn", "pill", 350, "mg", 45, 120,
0, "2017-09-03", "2017-09-03", "2017-09-03", "2017-09-03", 1, 1, true, false, false, 
"take with 2 cups of coffee", "do not talk to others before taking");



