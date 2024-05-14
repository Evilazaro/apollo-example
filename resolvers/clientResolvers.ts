let clients = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Doe', email: 'jane@example.com' },
  { id: '3', name: 'Michael Smith', email: 'michael.smith@example.com' },
  { id: '4', name: 'Maria Garcia', email: 'maria.garcia@example.com' },
  { id: '5', name: 'David Johnson', email: 'david.johnson@example.com' },
  { id: '6', name: 'Emily Martinez', email: 'emily.martinez@example.com' },
  { id: '7', name: 'James Brown', email: 'james.brown@example.com' },
  { id: '8', name: 'Sarah Lee', email: 'sarah.lee@example.com' },
  { id: '9', name: 'Robert Wilson', email: 'robert.wilson@example.com' },
  { id: '10', name: 'Linda Walker', email: 'linda.walker@example.com' },
  { id: '11', name: 'William Hall', email: 'william.hall@example.com' },
  { id: '12', name: 'Barbara Young', email: 'barbara.young@example.com' },
  { id: '13', name: 'Charles King', email: 'charles.king@example.com' },
  { id: '14', name: 'Jessica Wright', email: 'jessica.wright@example.com' },
  { id: '15', name: 'Joseph Hernandez', email: 'joseph.hernandez@example.com' },
  { id: '16', name: 'Karen Lopez', email: 'karen.lopez@example.com' },
  { id: '17', name: 'Thomas Clark', email: 'thomas.clark@example.com' },
  { id: '18', name: 'Nancy Allen', email: 'nancy.allen@example.com' },
  { id: '19', name: 'Christopher Scott', email: 'christopher.scott@example.com' },
  { id: '20', name: 'Betty Adams', email: 'betty.adams@example.com' },
  { id: '21', name: 'Daniel Rodriguez', email: 'daniel.rodriguez@example.com' },
  { id: '22', name: 'Margaret Lewis', email: 'margaret.lewis@example.com' },
  { id: '23', name: 'Matthew Robinson', email: 'matthew.robinson@example.com' },
  { id: '24', name: 'Sandra Walker', email: 'sandra.walker@example.com' },
  { id: '25', name: 'Anthony Thomas', email: 'anthony.thomas@example.com' },
  { id: '26', name: 'Ashley Baker', email: 'ashley.baker@example.com' },
  { id: '27', name: 'Mark Gonzalez', email: 'mark.gonzalez@example.com' },
  { id: '28', name: 'Kimberly Hill', email: 'kimberly.hill@example.com' },
  { id: '29', name: 'Joshua Perez', email: 'joshua.perez@example.com' },
  { id: '30', name: 'Amanda Moore', email: 'amanda.moore@example.com' },
  { id: '31', name: 'Andrew Turner', email: 'andrew.turner@example.com' },
  { id: '32', name: 'Donna Mitchell', email: 'donna.mitchell@example.com' },
  { id: '33', name: 'Edward Campbell', email: 'edward.campbell@example.com' },
  { id: '34', name: 'Rebecca Carter', email: 'rebecca.carter@example.com' },
  { id: '35', name: 'Brian Phillips', email: 'brian.phillips@example.com' },
  { id: '36', name: 'Laura Evans', email: 'laura.evans@example.com' },
  { id: '37', name: 'Steven Collins', email: 'steven.collins@example.com' },
  { id: '38', name: 'Megan Edwards', email: 'megan.edwards@example.com' },
  { id: '39', name: 'Jacob Stewart', email: 'jacob.stewart@example.com' },
  { id: '40', name: 'Anna Morris', email: 'anna.morris@example.com' },
  { id: '41', name: 'Ryan Murphy', email: 'ryan.murphy@example.com' },
  { id: '42', name: 'Alice Rivera', email: 'alice.rivera@example.com' },
  { id: '43', name: 'Gary Cook', email: 'gary.cook@example.com' },
  { id: '44', name: 'Shirley Rogers', email: 'shirley.rogers@example.com' },
  { id: '45', name: 'Timothy Reed', email: 'timothy.reed@example.com' },
  { id: '46', name: 'Angela Diaz', email: 'angela.diaz@example.com' },
  { id: '47', name: 'Frank Bennett', email: 'frank.bennett@example.com' },
  { id: '48', name: 'Emma Howard', email: 'emma.howard@example.com' },
  { id: '49', name: 'Patrick Barnes', email: 'patrick.barnes@example.com' },
  { id: '50', name: 'Cheryl Ross', email: 'cheryl.ross@example.com' },
  { id: '51', name: 'Gregory Henderson', email: 'gregory.henderson@example.com' },
  { id: '52', name: 'Catherine Coleman', email: 'catherine.coleman@example.com' },
  { id: '53', name: 'Eric Jenkins', email: 'eric.jenkins@example.com' },
  { id: '54', name: 'Katherine Perry', email: 'katherine.perry@example.com' },
  { id: '55', name: 'Scott Powell', email: 'scott.powell@example.com' },
  { id: '56', name: 'Christine Long', email: 'christine.long@example.com' },
  { id: '57', name: 'George Patterson', email: 'george.patterson@example.com' },
  { id: '58', name: 'Rachel Hughes', email: 'rachel.hughes@example.com' },
  { id: '59', name: 'Kevin Flores', email: 'kevin.flores@example.com' },
  { id: '60', name: 'Stephanie Sanders', email: 'stephanie.sanders@example.com' },
  { id: '61', name: 'Jason Price', email: 'jason.price@example.com' },
  { id: '62', name: 'Janet Bell', email: 'janet.bell@example.com' },
  { id: '63', name: 'Gary Green', email: 'gary.green@example.com' },
  { id: '64', name: 'Rebecca Ramirez', email: 'rebecca.ramirez@example.com' },
  { id: '65', name: 'Larry Ward', email: 'larry.ward@example.com' },
  { id: '66', name: 'Pamela Watson', email: 'pamela.watson@example.com' },
  { id: '67', name: 'Jeffrey Brooks', email: 'jeffrey.brooks@example.com' },
  { id: '68', name: 'Debra Brooks', email: 'debra.brooks@example.com' },
  { id: '69', name: 'William Wood', email: 'william.wood@example.com' },
  { id: '70', name: 'Elizabeth Sanders', email: 'elizabeth.sanders@example.com' },
  { id: '71', name: 'Ronald Cooper', email: 'ronald.cooper@example.com' },
  { id: '72', name: 'Amanda Rivera', email: 'amanda.rivera@example.com' },
  { id: '73', name: 'Mary Richardson', email: 'mary.richardson@example.com' },
  { id: '74', name: 'Donald Cox', email: 'donald.cox@example.com' },
  { id: '75', name: 'Lisa Howard', email: 'lisa.howard@example.com' },
  { id: '76', name: 'Richard Ward', email: 'richard.ward@example.com' },
  { id: '77', name: 'Sandra Torres', email: 'sandra.torres@example.com' },
  { id: '78', name: 'Donna Peterson', email: 'donna.peterson@example.com' },
  { id: '79', name: 'Kenneth Gray', email: 'kenneth.gray@example.com' },
  { id: '80', name: 'Jessica Ramirez', email: 'jessica.ramirez@example.com' },
  { id: '81', name: 'Paul Bailey', email: 'paul.bailey@example.com' },
  { id: '82', name: 'Sarah Clark', email: 'sarah.clark@example.com' },
  { id: '83', name: 'Steven Allen', email: 'steven.allen@example.com' },
  { id: '84', name: 'Laura James', email: 'laura.james@example.com' },
  { id: '85', name: 'Daniel Nelson', email: 'daniel.nelson@example.com' },
  { id: '86', name: 'Nancy Scott', email: 'nancy.scott@example.com' },
  { id: '87', name: 'George Lewis', email: 'george.lewis@example.com' },
  { id: '88', name: 'Karen Hall', email: 'karen.hall@example.com' },
  { id: '89', name: 'Matthew Walker', email: 'matthew.walker@example.com' },
  { id: '90', name: 'Carol Martinez', email: 'carol.martinez@example.com' },
  { id: '91', name: 'Joshua Robinson', email: 'joshua.robinson@example.com' },
  { id: '92', name: 'Barbara Young', email: 'barbara.young@example.com' },
  { id: '93', name: 'David Hernandez', email: 'david.hernandez@example.com' },
  { id: '94', name: 'Mary King', email: 'mary.king@example.com' },
  { id: '95', name: 'Thomas Lee', email: 'thomas.lee@example.com' },
  { id: '96', name: 'Nancy Wright', email: 'nancy.wright@example.com' },
  { id: '97', name: 'James Lopez', email: 'james.lopez@example.com' },
  { id: '98', name: 'Patricia Hill', email: 'patricia.hill@example.com' },
  { id: '99', name: 'Mark Harris', email: 'mark.harris@example.com' },
  { id: '100', name: 'Linda Green', email: 'linda.green@example.com' },
  { id: '101', name: 'Michael Clark', email: 'michael.clark@example.com' },
  { id: '102', name: 'Sarah Hall', email: 'sarah.hall@example.com' },
  { id: '103', name: 'William Allen', email: 'william.allen@example.com' },
  { id: '104', name: 'Margaret Wright', email: 'margaret.wright@example.com' },
  { id: '105', name: 'Robert Hernandez', email: 'robert.hernandez@example.com' },
  { id: '106', name: 'Dorothy King', email: 'dorothy.king@example.com' },
  { id: '107', name: 'Charles Lee', email: 'charles.lee@example.com' },
  { id: '108', name: 'Karen Martinez', email: 'karen.martinez@example.com' },
  { id: '109', name: 'Donald Robinson', email: 'donald.robinson@example.com' },
  { id: '110', name: 'Jennifer White', email: 'jennifer.white@example.com' },
  { id: '111', name: 'Thomas Harris', email: 'thomas.harris@example.com' },
  { id: '112', name: 'Patricia Clark', email: 'patricia.clark@example.com' },
  { id: '113', name: 'Mary Walker', email: 'mary.walker@example.com' },
  { id: '114', name: 'James Wright', email: 'james.wright@example.com' },
  { id: '115', name: 'George White', email: 'george.white@example.com' },
  { id: '116', name: 'Susan Robinson', email: 'susan.robinson@example.com' },
  { id: '117', name: 'Christopher Martinez', email: 'christopher.martinez@example.com' },
  { id: '118', name: 'David Allen', email: 'david.allen@example.com' },
  { id: '119', name: 'Linda White', email: 'linda.white@example.com' },
  { id: '120', name: 'James White', email: 'james.white@example.com' },
  { id: '121', name: 'Jennifer Johnson', email: 'jennifer.johnson@example.com' },
  { id: '122', name: 'Michael Johnson', email: 'michael.johnson@example.com' },
  { id: '123', name: 'Barbara Johnson', email: 'barbara.johnson@example.com' },
  { id: '124', name: 'William Johnson', email: 'william.johnson@example.com' },
  { id: '125', name: 'Linda Johnson', email: 'linda.johnson@example.com' },
  { id: '126', name: 'Joseph Johnson', email: 'joseph.johnson@example.com' },
  { id: '127', name: 'Jessica Johnson', email: 'jessica.johnson@example.com' },
  { id: '128', name: 'Matthew Johnson', email: 'matthew.johnson@example.com' },
  { id: '129', name: 'Daniel Johnson', email: 'daniel.johnson@example.com' },
  { id: '130', name: 'Christopher Johnson', email: 'christopher.johnson@example.com' },
  { id: '131', name: 'Karen Johnson', email: 'karen.johnson@example.com' },
  { id: '132', name: 'Nancy Johnson', email: 'nancy.johnson@example.com' },
  { id: '133', name: 'Charles Johnson', email: 'charles.johnson@example.com' },
  { id: '134', name: 'Thomas Johnson', email: 'thomas.johnson@example.com' },
  { id: '135', name: 'Patricia Johnson', email: 'patricia.johnson@example.com' },
  { id: '136', name: 'Robert Johnson', email: 'robert.johnson@example.com' },
  { id: '137', name: 'Susan Johnson', email: 'susan.johnson@example.com' },
  { id: '138', name: 'Mary Johnson', email: 'mary.johnson@example.com' },
  { id: '139', name: 'George Johnson', email: 'george.johnson@example.com' },
  { id: '140', name: 'James Johnson', email: 'james.johnson@example.com' },
  { id: '141', name: 'Michael Williams', email: 'michael.williams@example.com' },
  { id: '142', name: 'Sarah Williams', email: 'sarah.williams@example.com' },
  { id: '143', name: 'William Williams', email: 'william.williams@example.com' },
  { id: '144', name: 'Margaret Williams', email: 'margaret.williams@example.com' },
  { id: '145', name: 'Robert Williams', email: 'robert.williams@example.com' },
  { id: '146', name: 'Dorothy Williams', email: 'dorothy.williams@example.com' },
  { id: '147', name: 'Charles Williams', email: 'charles.williams@example.com' },
  { id: '148', name: 'Karen Williams', email: 'karen.williams@example.com' },
  { id: '149', name: 'Donald Williams', email: 'donald.williams@example.com' },
  { id: '150', name: 'Jennifer Williams', email: 'jennifer.williams@example.com' },
  { id: '151', name: 'Thomas Williams', email: 'thomas.williams@example.com' },
  { id: '152', name: 'Patricia Williams', email: 'patricia.williams@example.com' },
  { id: '153', name: 'Mary Williams', email: 'mary.williams@example.com' },
  { id: '154', name: 'James Williams', email: 'james.williams@example.com' },
  { id: '155', name: 'George Williams', email: 'george.williams@example.com' },
  { id: '156', name: 'Susan Williams', email: 'susan.williams@example.com' },
  { id: '157', name: 'Christopher Williams', email: 'christopher.williams@example.com' },
  { id: '158', name: 'David Williams', email: 'david.williams@example.com' },
  { id: '159', name: 'Linda Williams', email: 'linda.williams@example.com' },
  { id: '160', name: 'James Williams', email: 'james.williams@example.com' },
  { id: '161', name: 'Jennifer Brown', email: 'jennifer.brown@example.com' },
  { id: '162', name: 'Michael Brown', email: 'michael.brown@example.com' },
  { id: '163', name: 'Barbara Brown', email: 'barbara.brown@example.com' },
  { id: '164', name: 'William Brown', email: 'william.brown@example.com' },
  { id: '165', name: 'Linda Brown', email: 'linda.brown@example.com' },
  { id: '166', name: 'Joseph Brown', email: 'joseph.brown@example.com' },
  { id: '167', name: 'Jessica Brown', email: 'jessica.brown@example.com' },
  { id: '168', name: 'Matthew Brown', email: 'matthew.brown@example.com' },
  { id: '169', name: 'Daniel Brown', email: 'daniel.brown@example.com' },
  { id: '170', name: 'Christopher Brown', email: 'christopher.brown@example.com' },
  { id: '171', name: 'Karen Brown', email: 'karen.brown@example.com' },
  { id: '172', name: 'Nancy Brown', email: 'nancy.brown@example.com' },
  { id: '173', name: 'Charles Brown', email: 'charles.brown@example.com' },
  { id: '174', name: 'Thomas Brown', email: 'thomas.brown@example.com' },
  { id: '175', name: 'Patricia Brown', email: 'patricia.brown@example.com' },
  { id: '176', name: 'Robert Brown', email: 'robert.brown@example.com' },
  { id: '177', name: 'Susan Brown', email: 'susan.brown@example.com' },
  { id: '178', name: 'Mary Brown', email: 'mary.brown@example.com' },
  { id: '179', name: 'George Brown', email: 'george.brown@example.com' },
  { id: '180', name: 'James Brown', email: 'james.brown@example.com' },
  { id: '181', name: 'Michael Davis', email: 'michael.davis@example.com' },
  { id: '182', name: 'Sarah Davis', email: 'sarah.davis@example.com' },
  { id: '183', name: 'William Davis', email: 'william.davis@example.com' },
  { id: '184', name: 'Margaret Davis', email: 'margaret.davis@example.com' },
  { id: '185', name: 'Robert Davis', email: 'robert.davis@example.com' },
  { id: '186', name: 'Dorothy Davis', email: 'dorothy.davis@example.com' },
  { id: '187', name: 'Charles Davis', email: 'charles.davis@example.com' },
  { id: '188', name: 'Karen Davis', email: 'karen.davis@example.com' },
  { id: '189', name: 'Donald Davis', email: 'donald.davis@example.com' },
  { id: '190', name: 'Jennifer Davis', email: 'jennifer.davis@example.com' },
  { id: '191', name: 'Thomas Davis', email: 'thomas.davis@example.com' },
  { id: '192', name: 'Patricia Davis', email: 'patricia.davis@example.com' },
  { id: '193', name: 'Mary Davis', email: 'mary.davis@example.com' },
  { id: '194', name: 'James Davis', email: 'james.davis@example.com' },
  { id: '195', name: 'George Davis', email: 'george.davis@example.com' },
  { id: '196', name: 'Susan Davis', email: 'susan.davis@example.com' },
  { id: '197', name: 'Christopher Davis', email: 'christopher.davis@example.com' },
  { id: '198', name: 'David Davis', email: 'david.davis@example.com' },
  { id: '199', name: 'Linda Davis', email: 'linda.davis@example.com' },
  { id: '200', name: 'James Davis', email: 'james.davis@example.com' },
  { id: '201', name: 'Jennifer Garcia', email: 'jennifer.garcia@example.com' },
  { id: '202', name: 'Michael Garcia', email: 'michael.garcia@example.com' },
  { id: '203', name: 'Barbara Garcia', email: 'barbara.garcia@example.com' },
  { id: '204', name: 'William Garcia', email: 'william.garcia@example.com' },
  { id: '205', name: 'Linda Garcia', email: 'linda.garcia@example.com' },
  { id: '206', name: 'Joseph Garcia', email: 'joseph.garcia@example.com' },
  { id: '207', name: 'Jessica Garcia', email: 'jessica.garcia@example.com' },
  { id: '208', name: 'Matthew Garcia', email: 'matthew.garcia@example.com' },
  { id: '209', name: 'Daniel Garcia', email: 'daniel.garcia@example.com' },
  { id: '210', name: 'Christopher Garcia', email: 'christopher.garcia@example.com' },
  { id: '211', name: 'Karen Garcia', email: 'karen.garcia@example.com' },
  { id: '212', name: 'Nancy Garcia', email: 'nancy.garcia@example.com' },
  { id: '213', name: 'Charles Garcia', email: 'charles.garcia@example.com' },
  { id: '214', name: 'Thomas Garcia', email: 'thomas.garcia@example.com' },
  { id: '215', name: 'Patricia Garcia', email: 'patricia.garcia@example.com' },
  { id: '216', name: 'Robert Garcia', email: 'robert.garcia@example.com' },
  { id: '217', name: 'Susan Garcia', email: 'susan.garcia@example.com' },
  { id: '218', name: 'Mary Garcia', email: 'mary.garcia@example.com' },
  { id: '219', name: 'George Garcia', email: 'george.garcia@example.com' },
  { id: '220', name: 'James Garcia', email: 'james.garcia@example.com' },
  { id: '221', name: 'Michael Martinez', email: 'michael.martinez@example.com' },
  { id: '222', name: 'Sarah Martinez', email: 'sarah.martinez@example.com' },
  { id: '223', name: 'William Martinez', email: 'william.martinez@example.com' },
  { id: '224', name: 'Margaret Martinez', email: 'margaret.martinez@example.com' },
  { id: '225', name: 'Robert Martinez', email: 'robert.martinez@example.com' },
  { id: '226', name: 'Dorothy Martinez', email: 'dorothy.martinez@example.com' },
  { id: '227', name: 'Charles Martinez', email: 'charles.martinez@example.com' },
  { id: '228', name: 'Karen Martinez', email: 'karen.martinez@example.com' },
  { id: '229', name: 'Donald Martinez', email: 'donald.martinez@example.com' },
  { id: '230', name: 'Jennifer Martinez', email: 'jennifer.martinez@example.com' },
  { id: '231', name: 'Thomas Martinez', email: 'thomas.martinez@example.com' },
  { id: '232', name: 'Patricia Martinez', email: 'patricia.martinez@example.com' },
  { id: '233', name: 'Mary Martinez', email: 'mary.martinez@example.com' },
  { id: '234', name: 'James Martinez', email: 'james.martinez@example.com' },
  { id: '235', name: 'George Martinez', email: 'george.martinez@example.com' },
  { id: '236', name: 'Susan Martinez', email: 'susan.martinez@example.com' },
  { id: '237', name: 'Christopher Martinez', email: 'christopher.martinez@example.com' },
  { id: '238', name: 'David Martinez', email: 'david.martinez@example.com' },
  { id: '239', name: 'Linda Martinez', email: 'linda.martinez@example.com' },
  { id: '240', name: 'James Martinez', email: 'james.martinez@example.com' },
  { id: '241', name: 'Jennifer White', email: 'jennifer.white@example.com' },
  { id: '242', name: 'Michael White', email: 'michael.white@example.com' },
  { id: '243', name: 'Barbara White', email: 'barbara.white@example.com' },
  { id: '244', name: 'William White', email: 'william.white@example.com' },
  { id: '245', name: 'Linda White', email: 'linda.white@example.com' },
  { id: '246', name: 'Joseph White', email: 'joseph.white@example.com' },
  { id: '247', name: 'Jessica White', email: 'jessica.white@example.com' },
  { id: '248', name: 'Matthew White', email: 'matthew.white@example.com' },
  { id: '249', name: 'Daniel White', email: 'daniel.white@example.com' },
  { id: '250', name: 'Christopher White', email: 'christopher.white@example.com' },
  { id: '251', name: 'Karen White', email: 'karen.white@example.com' },
  { id: '252', name: 'Nancy White', email: 'nancy.white@example.com' },
  { id: '253', name: 'Charles White', email: 'charles.white@example.com' },
  { id: '254', name: 'Thomas White', email: 'thomas.white@example.com' },
  { id: '255', name: 'Patricia White', email: 'patricia.white@example.com' },
  { id: '256', name: 'Robert White', email: 'robert.white@example.com' },
  { id: '257', name: 'Susan White', email: 'susan.white@example.com' },
  { id: '258', name: 'Mary White', email: 'mary.white@example.com' },
  { id: '259', name: 'George White', email: 'george.white@example.com' },
  { id: '260', name: 'James White', email: 'james.white@example.com' },
  { id: '261', name: 'Jennifer Harris', email: 'jennifer.harris@example.com' },
  { id: '262', name: 'Michael Harris', email: 'michael.harris@example.com' },
  { id: '263', name: 'Barbara Harris', email: 'barbara.harris@example.com' },
  { id: '264', name: 'William Harris', email: 'william.harris@example.com' },
  { id: '265', name: 'Linda Harris', email: 'linda.harris@example.com' },
  { id: '266', name: 'Joseph Harris', email: 'joseph.harris@example.com' },
  { id: '267', name: 'Jessica Harris', email: 'jessica.harris@example.com' },
  { id: '268', name: 'Matthew Harris', email: 'matthew.harris@example.com' },
  { id: '269', name: 'Daniel Harris', email: 'daniel.harris@example.com' },
  { id: '270', name: 'Christopher Harris', email: 'christopher.harris@example.com' },
  { id: '271', name: 'Karen Harris', email: 'karen.harris@example.com' },
  { id: '272', name: 'Nancy Harris', email: 'nancy.harris@example.com' },
  { id: '273', name: 'Charles Harris', email: 'charles.harris@example.com' },
  { id: '274', name: 'Thomas Harris', email: 'thomas.harris@example.com' },
  { id: '275', name: 'Patricia Harris', email: 'patricia.harris@example.com' },
  { id: '276', name: 'Robert Harris', email: 'robert.harris@example.com' },
  { id: '277', name: 'Susan Harris', email: 'susan.harris@example.com' },
  { id: '278', name: 'Mary Harris', email: 'mary.harris@example.com' },
  { id: '279', name: 'George Harris', email: 'george.harris@example.com' },
  { id: '280', name: 'James Harris', email: 'james.harris@example.com' },
  { id: '281', name: 'Michael Clark', email: 'michael.clark@example.com' },
  { id: '282', name: 'Sarah Clark', email: 'sarah.clark@example.com' },
  { id: '283', name: 'William Clark', email: 'william.clark@example.com' },
  { id: '284', name: 'Margaret Clark', email: 'margaret.clark@example.com' },
  { id: '285', name: 'Robert Clark', email: 'robert.clark@example.com' },
  { id: '286', name: 'Dorothy Clark', email: 'dorothy.clark@example.com' },
  { id: '287', name: 'Charles Clark', email: 'charles.clark@example.com' },
  { id: '288', name: 'Karen Clark', email: 'karen.clark@example.com' },
  { id: '289', name: 'Donald Clark', email: 'donald.clark@example.com' },
  { id: '290', name: 'Jennifer Clark', email: 'jennifer.clark@example.com' },
  { id: '291', name: 'Thomas Clark', email: 'thomas.clark@example.com' },
  { id: '292', name: 'Patricia Clark', email: 'patricia.clark@example.com' },
  { id: '293', name: 'Mary Clark', email: 'mary.clark@example.com' },
  { id: '294', name: 'James Clark', email: 'james.clark@example.com' },
  { id: '295', name: 'George Clark', email: 'george.clark@example.com' },
  { id: '296', name: 'Susan Clark', email: 'susan.clark@example.com' },
  { id: '297', name: 'Christopher Clark', email: 'christopher.clark@example.com' },
  { id: '298', name: 'David Clark', email: 'david.clark@example.com' },
  { id: '299', name: 'Linda Clark', email: 'linda.clark@example.com' },
  { id: '300', name: 'James Clark', email: 'james.clark@example.com' },
];


export const clientResolvers = {
  Query: {
    clients: () => clients
  },
};
