// Database Management Systems Question Bank
const questionBank = [
    // Set 1: Database Fundamentals
    {
        id: 1,
        type: "multiple-choice",
        question: "Which of the following statements are true of a simple database?",
        options: [
            "A structured set of data",
            "A store of data that allows information retrieval",
            "Manages database structure",
            "Defines, manipulates, retrieves and manages data in a database",
            "Controls shared database access by multiple applications"
        ],
        correctAnswers: [0, 1],
        points: 2,
        explanation: "A simple database is a structured set of data that allows information retrieval. It doesn't manage structure or control access like a DBMS."
    },
    {
        id: 2,
        type: "multiple-choice",
        question: "Which of the following statements are true of a database management system?",
        options: [
            "A structured set of data",
            "A store of data that allows information retrieval",
            "Manages database structure",
            "Defines, manipulates, retrieves and manages data in a database",
            "Controls shared database access by multiple applications"
        ],
        correctAnswers: [2, 3, 4],
        points: 3,
        explanation: "A DBMS manages database structure, defines/manipulates/retrieves data, and controls shared access."
    },
    {
        id: 3,
        type: "multiple-choice",
        question: "Which of the following statements are true of relational databases?",
        options: [
            "Stores data in tables",
            "Stores data in columns and rows",
            "Links tables through matching columns",
            "Information is represented in objects",
            "Links records together like a family tree"
        ],
        correctAnswers: [0, 1, 2],
        points: 3,
        explanation: "Relational databases store data in tables with columns and rows, and link tables through matching columns."
    },
    {
        id: 4,
        type: "multiple-choice",
        question: "Which of the following are benefits of relational databases?",
        options: [
            "Improved data access and retrieval",
            "Reduces data inconsistency",
            "Improves speed of information retrieval",
            "Improved data analyses and management information",
            "Stores modern data types"
        ],
        correctAnswers: [0, 1, 3],
        points: 3,
        explanation: "Relational databases improve data access, reduce inconsistency, and improve data analysis capabilities."
    },
    {
        id: 5,
        type: "multiple-choice",
        question: "Which of the following are limitations of relational databases?",
        options: [
            "Reduced data access and retrieval",
            "Increased data inconsistency",
            "Reduced speed of information retrieval",
            "Reduced data analyses and management information",
            "Can't handle modern data types"
        ],
        correctAnswers: [4],
        points: 2,
        explanation: "The main limitation is that relational databases can't handle modern data types effectively."
    },

    // Set 2: Relational Model
    {
        id: 6,
        type: "multiple-choice",
        question: "Which of the following statements are true of a relational database?",
        options: [
            "Governed by integrity rules",
            "Stores data in relations",
            "Stores data based on the relational model",
            "A set of tuples",
            "An unordered set of attributes"
        ],
        correctAnswers: [0, 1, 2],
        points: 3,
        explanation: "Relational databases are governed by integrity rules, store data in relations, and are based on the relational model."
    },
    {
        id: 7,
        type: "single-choice",
        question: "Who developed the relational model?",
        options: [
            "EF Codd",
            "CJ Date",
            "Oracle",
            "IBM",
            "Tim Berners-Lee"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "EF Codd developed the relational model in 1970 while working at IBM."
    },
    {
        id: 8,
        type: "single-choice",
        question: "Which statement best describes the main components of a relational database?",
        options: [
            "Relations, Columns, Tuples, Keys and Integrity Rules",
            "Relations, Columns, Attributes, Keys and Integrity Language",
            "Relations, Rows, Tuples, Keys and Integrity Data",
            "Relations, Columns, Tuples, Keys and Integrity Information",
            "Relations, Columns and Rows"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "The main components are Relations, Columns, Tuples, Keys and Integrity Rules."
    },
    {
        id: 9,
        type: "multiple-choice",
        question: "Which of these statements are true about relations?",
        options: [
            "Represented by 2 dimensional tables",
            "Has a set of tuples",
            "Has an unordered set of attribute values",
            "Is a link between tables",
            "Governs operations on the data and structures of a database",
            "Have the same columns"
        ],
        correctAnswers: [0, 1, 2],
        points: 3,
        explanation: "Relations are represented by 2D tables, have a set of tuples, and have an unordered set of attribute values."
    },
    {
        id: 10,
        type: "multiple-choice",
        question: "Which of these statements are true about tuples?",
        options: [
            "Represented by 2 dimensional tables",
            "Has a set of tuples",
            "Has an unordered set of attribute values",
            "Is a link between tables",
            "Governs operations on the data and structures of a database",
            "Have the same columns"
        ],
        correctAnswers: [2, 5],
        points: 2,
        explanation: "Tuples have an unordered set of attribute values and have the same columns within a relation."
    },

    // Set 3: Entity-Relationship Model
    {
        id: 11,
        type: "single-choice",
        question: "What best describes the main components of an entity relationship diagram?",
        options: [
            "entities, relationships, cardinality",
            "relations, columns, attributes, keys",
            "entities, relations, cardinality",
            "entities, relationships, columns",
            "attributes, domains, keys and integrity"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "ERDs consist of entities, relationships, and cardinality."
    },
    {
        id: 12,
        type: "single-choice",
        question: "Which of these statements are true about relationships?",
        options: [
            "represented by 2 dimensional tables",
            "has a set of tuples",
            "has an unordered set of attribute values",
            "Is a link between tables",
            "governs operations on the data and structures of a database",
            "have the same columns"
        ],
        correctAnswers: [3],
        points: 1,
        explanation: "Relationships are links between tables/entities."
    },
    {
        id: 13,
        type: "multiple-choice",
        question: "Which of the following are database modelling tools?",
        options: [
            "normalisation",
            "ERM",
            "LDA",
            "data flow diagrams",
            "entity lifecycle",
            "life drawing"
        ],
        correctAnswers: [0, 1, 2, 3, 4],
        points: 5,
        explanation: "All except life drawing are database modeling tools."
    },
    {
        id: 14,
        type: "multiple-choice",
        question: "Which of the following statements is true about a primary key?",
        options: [
            "unique identifier for an entity",
            "every entity must have one primary key",
            "no 2 values in a primary key can be the same",
            "primary keys cannot take NULL values",
            "an entity may have many primary keys",
            "primary keys must be numbers"
        ],
        correctAnswers: [0, 1, 2, 3],
        points: 4,
        explanation: "Primary keys are unique identifiers, mandatory, unique, and cannot be NULL."
    },
    {
        id: 15,
        type: "multiple-choice",
        question: "Which of the following are tests for entities?",
        options: [
            "is it of importance",
            "do we need to store data about it",
            "are there many occurrences",
            "is it unique",
            "can it take NULLs",
            "is it related to other entities"
        ],
        correctAnswers: [0, 1, 2],
        points: 3,
        explanation: "Entity tests include importance, need to store data, and multiple occurrences."
    },

    // Set 4: Database Components
    {
        id: 16,
        type: "multiple-choice",
        question: "Which of the following statements are true about an entity?",
        options: [
            "encapsulate business policy and data",
            "a person, place, thing or concept about which data can be collected",
            "made up of a number of attributes",
            "maybe be optional or mandatory",
            "a group of data items"
        ],
        correctAnswers: [1, 2, 3],
        points: 4,
        explanation: "Entities are things about which we collect data, made up of attributes, and can be optional or mandatory."
    },
    {
        id: 17,
        type: "multiple-choice",
        question: "Which of the following statements are true about an attribute?",
        options: [
            "a group of data items",
            "characteristic of an entity",
            "maybe be optional or mandatory",
            "non decomposable unit of data about an entity",
            "classification of the type of values stored"
        ],
        correctAnswers: [1, 2, 3],
        points: 3,
        explanation: "Attributes are characteristics of entities, can be optional/mandatory, and are non-decomposable units."
    },
    {
        id: 18,
        type: "multiple-choice",
        question: "Which of the following statements are true about a datatype?",
        options: [
            "classification of the type of values stored",
            "helps to defines an attribute",
            "specifie how data can be used",
            "a group of data items",
            "specifie the domain"
        ],
        correctAnswers: [0, 1, 2, 4],
        points: 4,
        explanation: "Datatypes classify values, define attributes, specify usage, and specify domains."
    },
    {
        id: 19,
        type: "multiple-choice",
        question: "Which of the following statements are true about relationships?",
        options: [
            "link between tables",
            "match primary keys in parent table to foreign keys in child table",
            "maybe be optional or mandatory",
            "require entity, referential and domain integrity",
            "links attributes in the same table together"
        ],
        correctAnswers: [0, 1, 2, 3],
        points: 4,
        explanation: "Relationships link tables via keys, can be optional/mandatory, and require integrity."
    },
    {
        id: 20,
        type: "matching",
        question: "Match the logical definitions to the physical representations",
        prompts: ["attribute", "entity", "domain", "tuple"],
        answers: ["column", "table", "datatype", "row"],
        correctMatches: {"attribute": "column", "entity": "table", "domain": "datatype", "tuple": "row"},
        points: 4,
        explanation: "Logical concepts map to physical implementations in databases."
    },

    // Set 5: Keys and Constraints
    {
        id: 21,
        type: "multiple-choice",
        question: "Which of the following statements are true about a primary key?",
        options: [
            "a constraint on data values",
            "a unique identifier",
            "mandatory value, so cannot take nulls",
            "field(s) used to uniquely identify a row of data",
            "only 1 per table",
            "may have many parts",
            "may be many in a table"
        ],
        correctAnswers: [0, 1, 2, 3, 4, 5],
        points: 6,
        explanation: "Primary keys have all these properties except there can only be one per table."
    },
    {
        id: 22,
        type: "multiple-choice",
        question: "Which of the following statements are true about a foreign key?",
        options: [
            "a constraint on data values",
            "mandatory value so cannot take nulls",
            "field(s) in a child table that references a matching primary key field in a parent table",
            "a secondary key in a parent table",
            "only 1 per table",
            "may have many parts",
            "may be many in a table"
        ],
        correctAnswers: [0, 2, 5, 6],
        points: 4,
        explanation: "Foreign keys are constraints that reference parent tables, can have many parts, and there can be many per table."
    },
    {
        id: 23,
        type: "matching",
        question: "Match the constraint to integrity",
        prompts: ["datatypes", "foreign key", "primary key", "unique constraints"],
        answers: ["domain integrity", "referential integrity", "entity integrity", "domain integrity"],
        correctMatches: {"datatypes": "domain integrity", "foreign key": "referential integrity", "primary key": "entity integrity", "unique constraints": "domain integrity"},
        points: 3,
        explanation: "Different constraints enforce different types of integrity."
    },
    {
        id: 24,
        type: "multiple-choice",
        question: "Which of the following statements are true about a compound key?",
        options: [
            "a secondary key in a parent table",
            "can be a primary key",
            "can be a foreign key",
            "a constraint on data values",
            "a key defined from multiple columns"
        ],
        correctAnswers: [1, 2, 3, 4],
        points: 4,
        explanation: "Compound keys can serve as primary or foreign keys, are constraints, and use multiple columns."
    },

    // Set 6: Cardinality and Relationships
    {
        id: 25,
        type: "multiple-choice",
        question: "Which of the following statements best describes database design cardinality?",
        options: [
            "the nature of the relationship",
            "relationship between entities in terms of occurrences",
            "identifies whether a relationship involvement is compulsory or not",
            "represented by solid or broken lines",
            "represented by crows feet",
            "indicates the number of instances of an entity in relation to another entity",
            "captures a hierarchical structure"
        ],
        correctAnswers: [1, 5],
        points: 4,
        explanation: "Cardinality describes relationships in terms of occurrences and number of instances."
    },
    {
        id: 26,
        type: "multiple-choice",
        question: "Which of the following statements best describes database optionality?",
        options: [
            "the nature of the relationship",
            "relationship between entities in terms of occurrences",
            "identifies whether a relationship involvement is compulsory or not",
            "represented by solid or broken lines",
            "represented by crows feet",
            "indicates the number of instances of an entity in relation to another entity",
            "captures a hierarchical structure"
        ],
        correctAnswers: [2, 3],
        points: 3,
        explanation: "Optionality identifies if relationships are compulsory and is shown by line types."
    },
    {
        id: 27,
        type: "multiple-choice",
        question: "What 3 types of relationship exist in ERM?",
        options: [
            "1:M",
            "M:N",
            "1:1",
            "1:0",
            "M:0"
        ],
        correctAnswers: [0, 1, 2],
        points: 3,
        explanation: "The three relationship types are one-to-many, many-to-many, and one-to-one."
    },
    {
        id: 28,
        type: "single-choice",
        question: "What is the only acceptable relationship in ERM?",
        options: [
            "1:M",
            "M:N",
            "1:1",
            "1:0",
            "M:0"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "Only one-to-many relationships are directly implementable in relational databases."
    },
    {
        id: 29,
        type: "single-choice",
        question: "What is a relationship from one entity to itself called?",
        options: [
            "optional",
            "mandatory",
            "cardinal",
            "recursive",
            "degree of freedom"
        ],
        correctAnswers: [3],
        points: 1,
        explanation: "A recursive relationship is from an entity to itself."
    },
    {
        id: 30,
        type: "single-choice",
        question: "How are M:N relationships resolved?",
        options: [
            "decomposed",
            "consolidated",
            "they don't need resolving",
            "ignored"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "Many-to-many relationships must be decomposed using a link entity."
    },

    // Set 7: Normalization
    {
        id: 31,
        type: "multiple-choice",
        question: "Which of these is achieved by normalisation?",
        options: [
            "identifies relationships within data",
            "logically groups data together",
            "facilitates data maintenance",
            "speeds up processing"
        ],
        correctAnswers: [0, 1, 2],
        points: 3,
        explanation: "Normalization identifies relationships, groups data logically, and facilitates maintenance."
    },
    {
        id: 32,
        type: "multiple-choice",
        question: "What anomalies does normalisation aim to address?",
        options: [
            "update",
            "insert",
            "delete",
            "create"
        ],
        correctAnswers: [0, 1, 2],
        points: 3,
        explanation: "Normalization addresses update, insert, and delete anomalies."
    },
    {
        id: 33,
        type: "multiple-choice",
        question: "Which of these are reasons to normalise data?",
        options: [
            "conform to Codd's 3 rules",
            "to fit in",
            "to improve efficiency",
            "reduce NULLs",
            "reduce redundancy",
            "limit loss of data"
        ],
        correctAnswers: [3, 4, 5],
        points: 3,
        explanation: "Normalization reduces NULLs and redundancy, and limits data loss."
    },
    {
        id: 34,
        type: "fill-blank",
        question: "What does RDA stand for?",
        correctAnswer: "Relational Data Analysis",
        points: 1,
        explanation: "RDA stands for Relational Data Analysis."
    },
    {
        id: 35,
        type: "fill-blank",
        question: "What directional approach is normalisation?",
        correctAnswer: "Bottom up",
        points: 1,
        explanation: "Normalization is a bottom-up approach to database design."
    },

    // Set 8: Normal Forms
    {
        id: 36,
        type: "single-choice",
        question: "What is UNF form concerned with?",
        options: [
            "identifying data items",
            "separating repeating and not repeating data",
            "reviewing relations with compound keys",
            "reviewing relations with more than 1 non key item"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "UNF (Unnormalized Form) is concerned with identifying data items."
    },
    {
        id: 37,
        type: "single-choice",
        question: "What is 1NF form concerned with?",
        options: [
            "identifying data items",
            "separating repeating and not repeating data",
            "reviewing relations with compound keys",
            "reviewing relations with more than 1 non key item"
        ],
        correctAnswers: [1],
        points: 1,
        explanation: "1NF separates repeating and non-repeating data groups."
    },
    {
        id: 38,
        type: "single-choice",
        question: "What is 2NF form concerned with?",
        options: [
            "identifying data items",
            "separating repeating and not repeating data",
            "reviewing relations with compound keys",
            "reviewing relations with more than 1 non key item"
        ],
        correctAnswers: [2],
        points: 1,
        explanation: "2NF reviews relations with compound keys for partial dependencies."
    },
    {
        id: 39,
        type: "single-choice",
        question: "What is 3NF form concerned with?",
        options: [
            "identifying data items",
            "separating repeating and not repeating data",
            "reviewing relations with compound keys",
            "reviewing relations with more than 1 non key item"
        ],
        correctAnswers: [3],
        points: 1,
        explanation: "3NF reviews relations with multiple non-key items for transitive dependencies."
    },
    {
        id: 40,
        type: "fill-blank",
        question: "What constraint is automatically set on defined primary keys?",
        correctAnswer: "NOT NULL",
        points: 1,
        explanation: "Primary keys automatically have NOT NULL constraint applied."
    },

    // Additional Database Questions
    {
        id: 41,
        type: "single-choice",
        question: "Which of these statements are true about integrity?",
        options: [
            "Represented by 2 dimensional tables",
            "Has a set of tuples",
            "Has an unordered set of attribute values",
            "Is a link between tables",
            "Governs operations on the data and structures of a relational database",
            "Have the same columns"
        ],
        correctAnswers: [4],
        points: 1,
        explanation: "Integrity governs operations on data and structures of a relational database."
    },
    {
        id: 42,
        type: "single-choice",
        question: "Which company developed the first commercial relational database?",
        options: [
            "Oracle",
            "IBM",
            "Microsoft",
            "Sybase",
            "HP"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "Oracle developed the first commercial relational database."
    },
    {
        id: 43,
        type: "single-choice",
        question: "What is data redundancy?",
        options: [
            "When data is no longer needed",
            "Unnecessary duplication of data",
            "When old data is removed",
            "When there is too much data",
            "When there is not enough data"
        ],
        correctAnswers: [1],
        points: 1,
        explanation: "Data redundancy is unnecessary duplication of data."
    },
    {
        id: 44,
        type: "single-choice",
        question: "What best describes the main components of a table specification?",
        options: [
            "attributes, domains, keys and integrity",
            "entities, relationships, cardinality",
            "tables, columns and rows",
            "attributes, data and cardinality",
            "keys and integrity"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "Table specifications include attributes, domains, keys and integrity."
    },
    {
        id: 45,
        type: "multiple-choice",
        question: "What is a universe of discourse?",
        options: [
            "the area under consideration",
            "the datatypes",
            "a type of integrity",
            "the database",
            "the area of the real world relevant to the database design"
        ],
        correctAnswers: [0, 4],
        points: 2,
        explanation: "Universe of discourse is the area under consideration and the real world area relevant to database design."
    },
    {
        id: 46,
        type: "single-choice",
        question: "Which of the following is the best example of an entity name?",
        options: [
            "student",
            "students",
            "student_id",
            "student_details",
            "student_name"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "Entity names should be singular nouns, so 'student' is correct."
    },
    {
        id: 47,
        type: "multiple-choice",
        question: "Which datatypes exist in Oracle SQL?",
        options: [
            "VARCHAR2",
            "CHAR",
            "NUMBER",
            "DATE",
            "TEXT",
            "AUTONUMBER"
        ],
        correctAnswers: [0, 1, 2, 3],
        points: 4,
        explanation: "Oracle SQL supports VARCHAR2, CHAR, NUMBER, and DATE datatypes."
    },
    {
        id: 48,
        type: "single-choice",
        question: "Which 2 attributes are matched in a relationship?",
        options: [
            "primary key and foreign key",
            "primary key and unique item",
            "primary key and secondary key",
            "foreign key and attribute"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "Relationships match primary keys with foreign keys."
    },
    {
        id: 49,
        type: "single-choice",
        question: "How are 1:1 relationships resolved?",
        options: [
            "decomposed",
            "consolidated",
            "they don't need resolving",
            "ignored"
        ],
        correctAnswers: [1],
        points: 1,
        explanation: "One-to-one relationships are typically consolidated into a single table."
    },
    {
        id: 50,
        type: "multiple-choice",
        question: "Which of the following statements are true about decomposition?",
        options: [
            "applied to resolve complex relationships",
            "a relationship that can not be processed in a relational database",
            "requires an additional entity",
            "applies to M:N relationships",
            "detail of data is lost",
            "requires an additional relationship"
        ],
        correctAnswers: [0, 2, 3, 5],
        points: 4,
        explanation: "Decomposition resolves complex M:N relationships by adding entities and relationships."
    },
    {
        id: 51,
        type: "single-choice",
        question: "Which of the following statements are true about complexity?",
        options: [
            "applied to resolve complex relationships",
            "a relationship that can not be processed in a relational database",
            "requires an additional entity",
            "applies to M:N relationships",
            "detail of data is lost",
            "requires an additional relationship"
        ],
        correctAnswers: [1],
        points: 1,
        explanation: "Complexity refers to relationships that cannot be processed in relational databases."
    },
    {
        id: 52,
        type: "single-choice",
        question: "How do you resolve an M:N relationship?",
        options: [
            "decompose it",
            "add an additional entity",
            "post keys to link entity",
            "consolidate it",
            "add parents"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "M:N relationships are resolved by decomposing them."
    },
    {
        id: 53,
        type: "single-choice",
        question: "Which 2 attributes are matched in a relationship?",
        options: [
            "primary key in the parent table and foreign key in the child table",
            "primary key in the parent table and foreign key in the parent table",
            "primary key in the parent table and secondary key in the parent table",
            "primary key in the parent table and another attribute parent table",
            "primary key in the child table and foreign key in the child table",
            "foreign key in the child table and foreign key in the parent table"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "Relationships match primary keys in parent tables with foreign keys in child tables."
    },
    {
        id: 54,
        type: "single-choice",
        question: "What are foreign keys in a link entity?",
        options: [
            "primary keys from the decomposed entities",
            "foreign key from the decomposed entities",
            "can be any attribute",
            "primary and foreign keys from the decomposed entities"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "Foreign keys in link entities are the primary keys from the decomposed entities."
    },
    {
        id: 55,
        type: "single-choice",
        question: "What do 'crows feet' represent in a ERD?",
        options: [
            "foreign keys",
            "primary keys",
            "attributes",
            "datatypes",
            "parents"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "Crows feet represent the 'many' side of relationships, indicating foreign keys."
    },

    // Integrity and Constraints
    {
        id: 56,
        type: "multiple-choice",
        question: "Which methods can be applied maintaining referential integrity?",
        options: [
            "cascade",
            "restrict",
            "nullify",
            "insert",
            "update"
        ],
        correctAnswers: [0, 1, 2],
        points: 3,
        explanation: "Referential integrity can be maintained using cascade, restrict, and nullify methods."
    },
    {
        id: 57,
        type: "single-choice",
        question: "Which 2 columns are referenced in a foreign key constraint?",
        options: [
            "primary key in the parent table and foreign key in the child table",
            "primary key in the parent table and foreign key in the parent table",
            "primary key in the parent table and secondary key in the parent table",
            "primary key in the parent table and another attribute parent table",
            "primary key in the child table and foreign key in the child table",
            "foreign key in the child table and foreign key in the parent table"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "Foreign key constraints reference primary keys in parent tables and foreign keys in child tables."
    },
    {
        id: 58,
        type: "multiple-choice",
        question: "When is entity integrity checked?",
        options: [
            "on insert",
            "on update",
            "on delete",
            "on dasher"
        ],
        correctAnswers: [0, 1],
        points: 2,
        explanation: "Entity integrity is checked on insert and update operations."
    },
    {
        id: 59,
        type: "multiple-choice",
        question: "When is referential integrity checked?",
        options: [
            "on insert",
            "on update",
            "on delete",
            "on dancer"
        ],
        correctAnswers: [0, 1, 2],
        points: 3,
        explanation: "Referential integrity is checked on insert, update, and delete operations."
    },
    {
        id: 60,
        type: "multiple-choice",
        question: "When is domain integrity checked?",
        options: [
            "on insert",
            "on update",
            "on delete",
            "on prancer"
        ],
        correctAnswers: [0, 1],
        points: 2,
        explanation: "Domain integrity is checked on insert and update operations."
    },
    {
        id: 61,
        type: "single-choice",
        question: "Which integrity is related to primary keys?",
        options: [
            "entity integrity",
            "referential integrity",
            "domain integrity",
            "relationship integrity",
            "datatype integrity"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "Entity integrity is related to primary keys."
    },
    {
        id: 62,
        type: "single-choice",
        question: "Which integrity is related to foreign keys?",
        options: [
            "entity integrity",
            "referential integrity",
            "domain integrity",
            "relationship integrity",
            "datatype integrity"
        ],
        correctAnswers: [1],
        points: 1,
        explanation: "Referential integrity is related to foreign keys."
    },
    {
        id: 63,
        type: "single-choice",
        question: "Which integrity is related to data?",
        options: [
            "entity integrity",
            "referential integrity",
            "domain integrity",
            "relationship integrity",
            "datatype integrity"
        ],
        correctAnswers: [2],
        points: 1,
        explanation: "Domain integrity is related to data validation."
    },
    {
        id: 64,
        type: "single-choice",
        question: "Which key word is used in SQL to identify the parent table and primary key in a foreign key constraint?",
        options: [
            "REFERENCES",
            "PARENT",
            "CONSTRAINT",
            "KEY"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "REFERENCES keyword identifies the parent table and primary key in foreign key constraints."
    },

    // More Normalization Questions
    {
        id: 65,
        type: "single-choice",
        question: "What does normalisation not identify?",
        options: [
            "entity integrity",
            "referential integrity",
            "domain integrity",
            "optionality",
            "cardinality"
        ],
        correctAnswers: [3, 4],
        points: 2,
        explanation: "Normalization does not identify optionality and cardinality."
    },
    {
        id: 66,
        type: "multiple-choice",
        question: "What disadvantages are there to normalisation?",
        options: [
            "retrieving data can be slow",
            "can be impractical for large data sets",
            "processing relationships can be complex",
            "data is repeated",
            "data is lost"
        ],
        correctAnswers: [0, 1, 2],
        points: 3,
        explanation: "Normalization can slow retrieval, be impractical for large datasets, and create complex processing."
    },
    {
        id: 67,
        type: "single-choice",
        question: "What level normal form is appropriate for a practical database?",
        options: [
            "UNF",
            "BCNF",
            "2NF",
            "3NF"
        ],
        correctAnswers: [3],
        points: 1,
        explanation: "3NF is generally considered appropriate for practical databases."
    },
    {
        id: 68,
        type: "single-choice",
        question: "Which of these best represents a NULL value?",
        options: [
            "blank",
            "zero",
            "0",
            "negative"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "A blank (empty) field best represents a NULL value."
    },
    {
        id: 69,
        type: "fill-blank",
        question: "What is the single semantic concept of normalisation?",
        correctAnswer: "Functional Dependency",
        points: 1,
        explanation: "Functional Dependency is the single semantic concept underlying normalization."
    },
    {
        id: 70,
        type: "single-choice",
        question: "What is the aim of 3NF?",
        options: [
            "removing mutually dependent non-key items",
            "ensuring non transitively dependent non-key items",
            "ensure all non key items depend on the whole key",
            "ensure all non key items depend on part of the key"
        ],
        correctAnswers: [1],
        points: 1,
        explanation: "3NF aims to ensure non-key items are not transitively dependent."
    },
    {
        id: 71,
        type: "single-choice",
        question: "What is the aim of 2NF?",
        options: [
            "removing mutually dependent non-key items",
            "ensuring non transitively dependent non-key items",
            "ensure all non key items depend on the whole key",
            "ensure all non key items depend on part of the key"
        ],
        correctAnswers: [2],
        points: 1,
        explanation: "2NF ensures all non-key items depend on the whole key."
    },
    {
        id: 72,
        type: "single-choice",
        question: "What does a relation represent in the database?",
        options: [
            "table",
            "attribute",
            "relationship",
            "ERD"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "A relation represents a table in the database."
    },
    {
        id: 73,
        type: "single-choice",
        question: "What does a data item represent in the database?",
        options: [
            "table",
            "attribute",
            "relationship",
            "ERD"
        ],
        correctAnswers: [1],
        points: 1,
        explanation: "A data item represents an attribute in the database."
    },
    {
        id: 74,
        type: "single-choice",
        question: "What does a foreign key represent in the database?",
        options: [
            "table",
            "attribute",
            "relationship",
            "ERD"
        ],
        correctAnswers: [2],
        points: 1,
        explanation: "A foreign key represents a relationship in the database."
    },
    {
        id: 75,
        type: "single-choice",
        question: "What is the end result of normalisation?",
        options: [
            "table",
            "attribute",
            "relationship",
            "ERD"
        ],
        correctAnswers: [0],
        points: 1,
        explanation: "The end result of normalization is properly structured tables."
    }
];

// Shuffle array function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Get random questions for exam
function getRandomQuestions(count = 20) {
    return shuffleArray(questionBank).slice(0, count);
}
