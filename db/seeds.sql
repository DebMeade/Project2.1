USE drugTracker_db;

INSERT INTO drugs (ndcNum, rxNum, name , drugName, drugForm, drugFormSize, drugFormMeasure, currentQty, bottleFullQty,
bottlePartialQty, rxWritten, rxFilled, rxDiscard, rxReorder, drugDose, drugFreq, early, mid, late, 
instructions, precautions) 

VALUES (333999, 444888, "Dr. Matlock", "Valium", "pill", 10 , "mg" , 30, 60, 10, "2018-09-17", "2018-09-17", "2019-01-01", 
"2018-12-17", 1, 3, true, false, false, "TAKE WITH WATER", "DO NOT DRIVE") ;

USE drugTracker_db;

INSERT INTO contacts (type, name, address, city, state, zip, locationId, email, phone)

VALUES ("Doctor", "Dr. Matlock", "789 South Southern Street", "Littleton", "CO", "80128", 
"RAF777", "drmatlock@realdoctor.com", "720-555-5555");
