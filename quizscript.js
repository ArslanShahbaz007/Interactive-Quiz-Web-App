const queryParams = new URLSearchParams(window.location.search);
const quizType = queryParams.get('quizType');
console.log(quizType);
console.log(typeof quizType);

const startquiz = document.getElementById('startquiz');
const submit = document.getElementById('submit');
let flagforsubmit = 0;
let i = 0;
let totalscore = 0;
let flagcheckonce = 1;
let correct = new Audio('correct.mp3');
let wrong = new Audio('wrong.mp3'); 
function generateUniqueRandomNumbers(count, min, max) {
    if (count > max - min + 1) {
        console.error("Cannot generate more unique numbers than the range allows.");
        return [];
    }

    const uniqueNumbers = [];
    while (uniqueNumbers.length < count) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

        if (!uniqueNumbers.includes(randomNum)) {
            uniqueNumbers.push(randomNum);
        }
    }

    return uniqueNumbers;
}




const toggle_elements = () => {


    const elements = document.querySelectorAll('.hidden');
    for (let index = 0; index < elements.length; index++) {
        elements[index].style.display = "block";

    }

}
const datastructure = [
    {
        ques: "What is a data structure?",
        a: " A way to store and organize data",
        b: " A computer's memory",
        c: " A specific type of data",
        d: " A programming language",
        correctIndex: " A way to store and organize data",
    },

    {
        ques: "Which data structure uses the last in, first out (LIFO) principle?",
        a: " Queue",
        b: " Stack",
        c: " Linked list",
        d: " Array",
        correctIndex: " Stack",

    },

    {
        ques: "In a binary search tree, which subtree should contain values greater than the root node?",
        a: " Left subtree",
        b: " Right subtree",
        c: " Both subtrees",
        d: " Neither subtree",
        correctIndex: " Right subtree",

    },

    {
        ques: "Which sorting algorithm has the worst-case time complexity of O(n^2) but is simple to implement?",
        a: " Quick sort",
        b: " Merge sort",
        c: " Bubble sort",
        d: " Heap sort",
        correctIndex: " Bubble sort",

    },
    {
        ques: "What is the primary advantage of using a hash table data structure?",
        a: " Constant-time lookup",
        b: " Sorted elements",
        c: " No memory usage",
        d: " In-place sorting",
        correctIndex: " Constant-time lookup",

    },
    {
        ques: "Which data structure follows the first in, first out (FIFO) principle?",
        a: " Stack",
        b: " Queue",
        c: " Linked list",
        d: " Binary tree",
        correctIndex: " Queue",

    },
    {
        ques: "Which data structure can efficiently check for the existence of an element but not its frequency?",
        a: " Array",
        b: " Set",
        c: " Hash table",
        d: " Stack",
        correctIndex: " Set",

    },
    {
        ques: "What data structure is used to implement a breadth-first search (BFS) traversal of a graph?",
        a: " Stack",
        b: " Queue",
        c: " Linked list",
        d: " Binary tree",
        correctIndex: " Queue",

    },
    {
        ques: "Which data structure can be used to represent a hierarchy or tree-like structure?",
        a: " Array",
        b: " Linked list",
        c: " Graph",
        d: " Tree",
        correctIndex: " Tree",

    },
    {
        ques: "A class that cannot be instantiated and serves as a blueprint for other classes is called: ",
        a: " Code reusability",
        b: " Code optimization",
        c: " Code obfuscation",
        d: " Code generation",
        correctIndex: " Code optimization",

    },

]
const algorithm = [
    {
        ques: "What is the main goal of Object-Oriented Programming (OOP)?",
        a: " Code reusability",
        b: " Code optimization",
        c: " Code obfuscation",
        d: " Code generation",
        correctIndex: " Code reusability",
    },

    {
        ques: "Which of the following is NOT a fundamental concept in OOP?",
        a: " Inheritance",
        b: " Polymorphism",
        c: " Algorithms",
        d: " Encapsulation",
        correctIndex: " Algorithms",

    },

    {
        ques: "In OOP, an object is an instance of a: ",
        a: " Class",
        b: " Method",
        c: " Variable",
        d: " Constructor",
        correctIndex: " Class",

    },

    {
        ques: "Which OOP principle allows you to hide the internal details of an object and only expose a public interface?",
        a: " Inheritance",
        b: " Polymorphism",
        c: " Encapsulation",
        d: " Abstraction",
        correctIndex: " Encapsulation",

    },
    {
        ques: "Inheritance in OOP is a mechanism for: ",
        a: " Code organization",
        b: " Code duplication",
        c: " Creating new classes",
        d: " Code deletion",
        correctIndex: " Code organization",

    },
    {
        ques: "Which OOP principle allows one class to inherit the properties and behaviors of another class?",
        a: " Polymorphism",
        b: " Encapsulation",
        c: " Inheritance",
        d: " Abstraction",
        correctIndex: " Polymorphism",

    },
    {
        ques: "Polymorphism in OOP is the ability to: ",
        a: " Create objects",
        b: " Have multiple forms",
        c: " Hide data",
        d: " Access private methods",
        correctIndex: " Have multiple forms",

    },
    {
        ques: "What does the term method overloading mean in OOP?",
        a: " Reusing a method with a different name",
        b: " Defining multiple methods with the same name but different parameters",
        c: " Using methods only in constructors",
        d: " Defining a method without any code",
        correctIndex: " Defining multiple methods with the same name but different parameters",

    },
    {
        ques: "What is the concept of method overriding in OOP?",
        a: " Concrete class",
        b: " Abstract class",
        c: " Final class",
        d: " Static class",
        correctIndex: " Abstract class",

    },
    {
        ques: "A class that cannot be instantiated and serves as a blueprint for other classes is called: ",
        a: " Code reusability",
        b: " Code optimization",
        c: " Code obfuscation",
        d: " Code generation",
        correctIndex: " Code optimization",

    },

]
const relationaldatabase = [

    {
        ques: "What is the main goal of Object-Oriented Programming (OOP)?",
        a: " Code reusability",
        b: " Code optimization",
        c: " Code obfuscation",
        d: " Code generation",
        correctIndex: " Code reusability",
    },

    {
        ques: "Which of the following is NOT a fundamental concept in OOP?",
        a: " Inheritance",
        b: " Polymorphism",
        c: " Algorithms",
        d: " Encapsulation",
        correctIndex: " Algorithms",

    },

    {
        ques: "In OOP, an object is an instance of a: ",
        a: " Class",
        b: " Method",
        c: " Variable",
        d: " Constructor",
        correctIndex: " Class",

    },

    {
        ques: "Which OOP principle allows you to hide the internal details of an object and only expose a public interface?",
        a: " Inheritance",
        b: " Polymorphism",
        c: " Encapsulation",
        d: " Abstraction",
        correctIndex: " Encapsulation",

    },
    {
        ques: "Inheritance in OOP is a mechanism for: ",
        a: " Code organization",
        b: " Code duplication",
        c: " Creating new classes",
        d: " Code deletion",
        correctIndex: " Code organization",

    },
    {
        ques: "Which OOP principle allows one class to inherit the properties and behaviors of another class?",
        a: " Polymorphism",
        b: " Encapsulation",
        c: " Inheritance",
        d: " Abstraction",
        correctIndex: " Polymorphism",

    },
    {
        ques: "Polymorphism in OOP is the ability to: ",
        a: " Create objects",
        b: " Have multiple forms",
        c: " Hide data",
        d: " Access private methods",
        correctIndex: " Have multiple forms",

    },
    {
        ques: "What does the term method overloading mean in OOP?",
        a: " Reusing a method with a different name",
        b: " Defining multiple methods with the same name but different parameters",
        c: " Using methods only in constructors",
        d: " Defining a method without any code",
        correctIndex: " Defining multiple methods with the same name but different parameters",

    },
    {
        ques: "What is the concept of method overriding in OOP?",
        a: " Concrete class",
        b: " Abstract class",
        c: " Final class",
        d: " Static class",
        correctIndex: " Abstract class",

    },
    {
        ques: "A class that cannot be instantiated and serves as a blueprint for other classes is called: ",
        a: " Code reusability",
        b: " Code optimization",
        c: " Code obfuscation",
        d: " Code generation",
        correctIndex: " Code optimization",

    },

]

const computernetworks=[
    {
        ques: "What is the main goal of Object-Oriented Programming (OOP)?",
        a: " Code reusability",
        b: " Code optimization",
        c: " Code obfuscation",
        d: " Code generation",
        correctIndex: " Code reusability",
    },

    {
        ques: "Which of the following is NOT a fundamental concept in OOP?",
        a: " Inheritance",
        b: " Polymorphism",
        c: " Algorithms",
        d: " Encapsulation",
        correctIndex: " Algorithms",

    },

    {
        ques: "In OOP, an object is an instance of a: ",
        a: " Class",
        b: " Method",
        c: " Variable",
        d: " Constructor",
        correctIndex: " Class",

    },

    {
        ques: "Which OOP principle allows you to hide the internal details of an object and only expose a public interface?",
        a: " Inheritance",
        b: " Polymorphism",
        c: " Encapsulation",
        d: " Abstraction",
        correctIndex: " Encapsulation",

    },
    {
        ques: "Inheritance in OOP is a mechanism for: ",
        a: " Code organization",
        b: " Code duplication",
        c: " Creating new classes",
        d: " Code deletion",
        correctIndex: " Code organization",

    },
    {
        ques: "Which OOP principle allows one class to inherit the properties and behaviors of another class?",
        a: " Polymorphism",
        b: " Encapsulation",
        c: " Inheritance",
        d: " Abstraction",
        correctIndex: " Polymorphism",

    },
    {
        ques: "Polymorphism in OOP is the ability to: ",
        a: " Create objects",
        b: " Have multiple forms",
        c: " Hide data",
        d: " Access private methods",
        correctIndex: " Have multiple forms",

    },
    {
        ques: "What does the term method overloading mean in OOP?",
        a: " Reusing a method with a different name",
        b: " Defining multiple methods with the same name but different parameters",
        c: " Using methods only in constructors",
        d: " Defining a method without any code",
        correctIndex: " Defining multiple methods with the same name but different parameters",

    },
    {
        ques: "What is the concept of method overriding in OOP?",
        a: " Concrete class",
        b: " Abstract class",
        c: " Final class",
        d: " Static class",
        correctIndex: " Abstract class",

    },
    {
        ques: "A class that cannot be instantiated and serves as a blueprint for other classes is called: ",
        a: " Code reusability",
        b: " Code optimization",
        c: " Code obfuscation",
        d: " Code generation",
        correctIndex: " Code optimization",

    },

]
const oop = [

    {
        ques: "What is the main goal of Object-Oriented Programming (OOP)?",
        a: " Code reusability",
        b: " Code optimization",
        c: " Code obfuscation",
        d: " Code generation",
        correctIndex: " Code reusability",
    },

    {
        ques: "Which of the following is NOT a fundamental concept in OOP?",
        a: " Inheritance",
        b: " Polymorphism",
        c: " Algorithms",
        d: " Encapsulation",
        correctIndex: " Algorithms",

    },

    {
        ques: "In OOP, an object is an instance of a: ",
        a: " Class",
        b: " Method",
        c: " Variable",
        d: " Constructor",
        correctIndex: " Class",

    },

    {
        ques: "Which OOP principle allows you to hide the internal details of an object and only expose a public interface?",
        a: " Inheritance",
        b: " Polymorphism",
        c: " Encapsulation",
        d: " Abstraction",
        correctIndex: " Encapsulation",

    },
    {
        ques: "Inheritance in OOP is a mechanism for: ",
        a: " Code organization",
        b: " Code duplication",
        c: " Creating new classes",
        d: " Code deletion",
        correctIndex: " Code organization",

    },
    {
        ques: "Which OOP principle allows one class to inherit the properties and behaviors of another class?",
        a: " Polymorphism",
        b: " Encapsulation",
        c: " Inheritance",
        d: " Abstraction",
        correctIndex: " Polymorphism",

    },
    {
        ques: "Polymorphism in OOP is the ability to: ",
        a: " Create objects",
        b: " Have multiple forms",
        c: " Hide data",
        d: " Access private methods",
        correctIndex: " Have multiple forms",

    },
    {
        ques: "What does the term method overloading mean in OOP?",
        a: " Reusing a method with a different name",
        b: " Defining multiple methods with the same name but different parameters",
        c: " Using methods only in constructors",
        d: " Defining a method without any code",
        correctIndex: " Defining multiple methods with the same name but different parameters",

    },
    {
        ques: "What is the concept of method overriding in OOP?",
        a: " Concrete class",
        b: " Abstract class",
        c: " Final class",
        d: " Static class",
        correctIndex: " Abstract class",

    },
    {
        ques: "A class that cannot be instantiated and serves as a blueprint for other classes is called: ",
        a: " Code reusability",
        b: " Code optimization",
        c: " Code obfuscation",
        d: " Code generation",
        correctIndex: " Code optimization",

    },
    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",
    // },

    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",

    // },

    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",

    // },

    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",

    // },
    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",

    // },
    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",

    // },
    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",

    // },
    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",

    // },
    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",

    // },
    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",

    // },
    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",
    // },

    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",

    // },

    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",

    // },

    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",

    // },
    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",

    // },
    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",

    // },
    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",

    // },
    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",

    // },
    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",

    // },
    // {
    //     ques: "What is the main goal of Object-Oriented Programming (OOP)?",
    //     a: " Code reusability",
    //     b: " Code optimization",
    //     c: " Code obfuscation", 
    //     d: " Code generation",
    //     correctIndex: " Code reusability",

    // }

]

const oopTrueFalseQuestions = [
    {
        question: "Object-Oriented Programming (OOP) emphasizes code reusability.",
        answer: true
    },
    {
        question: "Polymorphism is the ability of an object to take on many forms.",
        answer: true
    },
    {
        question: "An object is an instance of a method in OOP.",
        answer: false
    },
    {
        question: "Encapsulation allows you to hide the internal details of an object and only expose a public interface.",
        answer: true
    },
    {
        question: "Inheritance in OOP is a mechanism for code duplication.",
        answer: false
    },
    {
        question: "Polymorphism is the ability to create objects.",
        answer: false
    },
    {
        question: "Method overloading means defining multiple methods with the same name but different parameters.",
        answer: true
    },
    {
        question: "Method overriding is creating a new method in a subclass.",
        answer: false
    },
    {
        question: "Abstraction encourages code organization into smaller, reusable units.",
        answer: true
    },
    {
        question: "An abstract class can be instantiated.",
        answer: false
    },
    {
        question: "A constructor is used for destroying objects in OOP.",
        answer: false
    },
    {
        question: "The 'this' keyword refers to the current object or instance within a class.",
        answer: true
    },
    {
        question: "A class member is a method or variable associated with a class itself.",
        answer: true
    },
    {
        question: "A superclass is also known as a child class.",
        answer: false
    },
    {
        question: "An interface in OOP specifies a contract that a class must adhere to.",
        answer: true
    },
    {
        question: "Composition is a mechanism for inheriting properties from another class.",
        answer: false
    },
    {
        question: "Code once, use many times is a key principle of inheritance.",
        answer: true
    },
    {
        question: "The 'final' keyword is used in Java to indicate that a class or method can be overridden or extended.",
        answer: false
    },
    {
        question: "Data transformation is a key concept of OOP.",
        answer: false
    },
    {
        question: "The 'this' keyword refers to the superclass in OOP.",
        answer: false
    },
    {
        question: "Multiple inheritance allows a class to inherit properties and methods from multiple classes.",
        answer: true
    },
    {
        question: "Polymorphism promotes code optimization.",
        answer: false
    },
    {
        question: "Inheritance is not a characteristic of OOP.",
        answer: false
    },
    {
        question: "Abstract methods in OOP are methods with implementation details.",
        answer: false
    },
    {
        question: "The 'sealed' keyword in C# is used to define a class that cannot be inherited from.",
        answer: true
    },
    {
        question: "A constructor is a method used for creating objects.",
        answer: true
    },
    {
        question: "Encapsulation emphasizes data hiding in OOP.",
        answer: true
    },
    {
        question: "A static class can be instantiated.",
        answer: false
    },
    {
        question: "Dynamic inheritance is a type of inheritance in OOP.",
        answer: false
    },
    {
        question: "Encapsulation promotes code duplication.",
        answer: false
    },
    {
        question: "An interface in OOP can have a concrete implementation.",
        answer: false
    },
    {
        question: "Abstraction allows for creating new classes.",
        answer: false
    },
    {
        question: "Composition is a form of multiple inheritance.",
        answer: false
    },
    {
        question: "Code reusability is not a goal of OOP.",
        answer: false
    },
    {
        question: "A derived class is also known as a sibling class.",
        answer: false
    },
    {
        question: "The 'abstract' keyword is used to define a class that can be instantiated.",
        answer: false
    },
    {
        question: "Data hiding is a key concept of OOP.",
        answer: true
    },
    {
        question: "Method overloading involves defining multiple methods with different names and parameters.",
        answer: false
    },
    {
        question: "An object can be an instance of a variable in OOP.",
        answer: false
    },
    {
        question: "Static methods are only allowed in abstract classes.",
        answer: false
    },
    {
        question: "Inheritance is a mechanism for creating new classes.",
        answer: true
    },
    {
        question: "A superclass is also known as a parent class.",
        answer: true
    },
    {
        question: "Abstraction is the ability to have multiple forms in OOP.",
        answer: false
    },
    {
        question: "An interface can have both abstract and concrete methods.",
        answer: true
    },
    {
        question: "Method overriding is the ability to create a new method with a different name.",
        answer: false
    },
    {
        question: "Inheritance allows one class to inherit properties and behaviors from multiple classes.",
        answer: false
    },
    {
        question: "Method overloading is the same as method overriding.",
        answer: false
    },
    {
        question: "An abstract class can be instantiated and used to create objects.",
        answer: false
    },
    {
        question: "A constructor is used for code optimization in OOP.",
        answer: false
    },
    {
        question: "The 'self' keyword is used to refer to the current object or instance within a class in many OOP languages.",
        answer: false
    },
    {
        question: "An abstract method in an interface must have an implementation in all implementing classes.",
        answer: false
    },
    {
        question: "Inheritance is a mechanism for code deletion in OOP.",
        answer: false
    },
    {
        question: "The 'super' keyword is used in Java to indicate that a method or class can be overridden or extended.",
        answer: false
    },
    {
        question: "An object is an instance of a variable in OOP.",
        answer: false
    },
    {
        question: "Composition is a mechanism for inheriting properties from another class.",
        answer: false
    },
    {
        question: "Code once, use many times is a key principle of polymorphism.",
        answer: false
    },
    {
        question: "The 'static' keyword is used in C# to define a class that can be inherited from.",
        answer: false
    },
    {
        question: "An interface in OOP can define a concrete implementation of a class.",
        answer: true
    },
]


const datastructuretf = [
    {
        question: "A linked list can only be traversed in one direction, from the head to the tail.",
        answer: true
    },
    {
        question: "A binary search tree (BST) is guaranteed to have a balanced structure.",
        answer: false
    },
    {
        question: "A stack follows the first in, first out (FIFO) principle.",
        answer: false
    },
    {
        question: "A hash table provides constant-time (O(1)) lookup and insertion in the best case.",
        answer: true
    },
    {
        question: "A graph data structure always contains cycles.",
        answer: false
    },

]

const algorithmtf = [
    {
        question: "An object is an instance of a variable in OOP.",
        answer: false
    },
    {
        question: "Composition is a mechanism for inheriting properties from another class.",
        answer: false
    },
    {
        question: "Code once, use many times is a key principle of polymorphism.",
        answer: false
    },
    {
        question: "The 'static' keyword is used in C# to define a class that can be inherited from.",
        answer: false
    },
    {
        question: "An interface in OOP can define a concrete implementation of a class.",
        answer: true
    },

]

const relationaldatabasetf = [
    {
        question: "An object is an instance of a variable in OOP.",
        answer: false
    },
    {
        question: "Composition is a mechanism for inheriting properties from another class.",
        answer: false
    },
    {
        question: "Code once, use many times is a key principle of polymorphism.",
        answer: false
    },
    {
        question: "The 'static' keyword is used in C# to define a class that can be inherited from.",
        answer: false
    },
    {
        question: "An interface in OOP can define a concrete implementation of a class.",
        answer: true
    },

]

const computernetworkstf = [
    {
        question: "An object is an instance of a variable in OOP.",
        answer: false
    },
    {
        question: "Composition is a mechanism for inheriting properties from another class.",
        answer: false
    },
    {
        question: "Code once, use many times is a key principle of polymorphism.",
        answer: false
    },
    {
        question: "The 'static' keyword is used in C# to define a class that can be inherited from.",
        answer: false
    },
    {
        question: "An interface in OOP can define a concrete implementation of a class.",
        answer: true
    },

]

function changeOptionText(idx) {
    const optionLabels = document.querySelectorAll('.options label');
    console.log(idx);
    let data;
    if (quizType=="1") {
        data=oop;
    }
    else if (quizType=="2") {
        data=datastructure;
    }else if (quizType=="3") {
        data=algorithm;
    }else if(quizType=="4"){
        data=relationaldatabase;
    }else if (quizType=="5") {
        data=computernetworks;
    }
    const newOptionTexts = [data[idx].a, data[idx].b, data[idx].c, data[idx].d];

    // Iterate through the label elements and update their text
    optionLabels.forEach(function (label, index) {
        // Update the textContent of the label element directly
        label.textContent = newOptionTexts[index];
        // Add the radio input back to the label
        const radioInput = document.createElement("input");
        radioInput.type = "radio";
        radioInput.name = "q"; // Use the appropriate name for your question
        radioInput.value = newOptionTexts[index];
        label.insertBefore(radioInput, label.firstChild);
    });
}
function changeOptionTexttf(idx) {
    
    const optionLabels = document.querySelectorAll('.options label');
    console.log(idx);
    const newOptionTexts = ["true", "false"];
    let count = 0;
    // Iterate through the label elements and update their text
    optionLabels.forEach(function (label, index) {
        // Update the textContent of the label element directly
        if (count <= 2) {
            label.textContent = newOptionTexts[index];
            // Add the radio input back to the label
            const radioInput = document.createElement("input");
            radioInput.type = "radio";
            radioInput.name = "q"; // Use the appropriate name for your question
            radioInput.value = newOptionTexts[index];
            label.insertBefore(radioInput, label.firstChild);
        }

    });
    let radiotag3 = document.getElementById('radiotag3');
    let radiotag4 = document.getElementById('radiotag4');
    radiotag3.style.display = "none";
    radiotag4.style.display = "none";

}

function checkSelectedOption(idx) {
    let data;
    if (quizType=="1") {
        data=oop;
    }
    else if (quizType=="2") {
        data=datastructure;
    }else if (quizType=="3") {
        data=algorithm;
    }else if(quizType=="4"){
        data=relationaldatabase;
    }else if (quizType=="5") {
        data=computernetworks;
    }
    const selectedRadioButton = document.querySelector('input[name="q"]:checked');

    if (selectedRadioButton) {

        if (selectedRadioButton.value == data[idx].correctIndex) {

            checkanswer.innerHTML = "Correct Answer! ";
            checkanswer.style.marginLeft = "2rem";
            checkanswer.style.marginTop = "1.2rem";
            checkanswer.style.color = 'green';
            totalscore = totalscore + 2;
            console.log(totalscore);
            correct.play();

        } else {
            checkanswer.innerHTML = `Wrong! Correct Answer is ${data[idx].correctIndex}`;
            checkanswer.style.marginLeft = "2rem";
            checkanswer.style.marginTop = "1.2rem";
            checkanswer.style.color = 'red';
            wrong.play();
        }
    } else {
        checkanswer.innerHTML = `Correct Answer is ${data[idx].correctIndex}`;
        checkanswer.style.marginLeft = "2rem";
        checkanswer.style.marginTop = "1.2rem";
        checkanswer.style.color = 'red';
        wrong.play();
    }
}
function checkSelectedOptiontf(idx) {
    let datatf;
    if (quizType=="1") {
        datatf=oopTrueFalseQuestions;
    }
    else if (quizType=="2") {
        datatf=datastructuretf;
    }else if (quizType=="3") {
        datatf=algorithmtf;
    }else if(quizType=="4"){
        datatf=relationaldatabasetf;
    }else if (quizType=="5") {
        datatf=computernetworkstf;
    }
    const selectedRadioButton = document.querySelector('input[name="q"]:checked');

    if (selectedRadioButton) {

        if ((String(selectedRadioButton.value)) == (String(datatf[idx].answer))) {
            checkanswer.innerHTML = "Correct Answer! ";
            checkanswer.style.marginLeft = "2rem";
            checkanswer.style.marginTop = "1.2rem";
            checkanswer.style.color = 'green';
            totalscore = totalscore + 1;
            correct.play();


        } else {
            checkanswer.innerHTML = `Wrong! Correct Answer is ${datatf[idx].answer}`;
            checkanswer.style.marginLeft = "2rem";
            checkanswer.style.marginTop = "1.2rem";
            checkanswer.style.color = 'red';
            wrong.play();
        }
    } else {
        checkanswer.innerHTML = `Correct Answer is ${datatf[idx].answer}`;
        checkanswer.style.marginLeft = "2rem";
        checkanswer.style.marginTop = "1.2rem";
        checkanswer.style.color = 'red';
        wrong.play();
    }
}
function updateQuestionAndOptions(i) {
    let data;
    if (quizType=="1") {
        data=oop;
    }
    else if (quizType=="2") {
        data=datastructure;
    }else if (quizType=="3") {
        data=algorithm;
    }else if(quizType=="4"){
        data=relationaldatabase;
    }else if (quizType=="5") {
        data=computernetworks;
    }
    flagforsubmit = 0;
    checkanswer.innerHTML = "";
    question.innerHTML = data[i].ques; // Subtract 1 from i to get the correct index
    changeOptionText(i); // Subtract 1 from i to get the correct index
}

function updateQuestionAndOptionstf(i) {
    let datatf;
    if (quizType=="1") {
        datatf=oopTrueFalseQuestions;
    }
    else if (quizType=="2") {
        datatf=datastructuretf;
    }else if (quizType=="3") {
        datatf=algorithmtf;
    }else if(quizType=="4"){
        datatf=relationaldatabasetf;
    }else if (quizType=="5") {
        dattf=computernetworkstf;
    }
    flagforsubmit = 0;
    checkanswer.innerHTML = "";
    question.innerHTML = datatf[i].question; // Subtract 1 from i to get the correct index
    changeOptionTexttf(i);
}

let restart = document.getElementById("restart");
restart.addEventListener('click', () => {
    const newurl = `quiz.html?quizType=${quizType}`;
    window.location.href = newurl;
})

startquiz.addEventListener('click', function () {
    const elementstoremove = document.querySelectorAll(".on-top, .sometext, .center");
    elementstoremove.forEach(element => {
        element.remove();
    })
    if (quizType == "1") {
        toggle_elements();
        i=0;
        let question = document.getElementById('question');
        // randomNumber = Math.floor(Math.random() * 31);
        // const uniqueRandomNumbers = generateUniqueRandomNumbers(15, 0, 30);
        // console.log(typeof uniqueRandomNumbers);
        // let i = 0;
        // question.innerHTML= oop[i].ques;
        // changeOptionText(i);
        // submit.addEventListener('click', ()=>{
        //     checkSelectedOption(i);
        // })

        // Initialize i to 1

        // Function to update the question and options

        updateQuestionAndOptions(i);
        let minutes = 0;
        let seconds = 0;
        let time = document.getElementById('time');
        time.innerHTML = `Time: ${minutes} : ${seconds}`;
        let score = document.getElementById('score');
        score.innerHTML = `Total Score: ${totalscore}`;


        setInterval(() => {
            if (seconds != 60) {
                seconds++;
            }
            else {
                seconds = 0;
                minutes++;
            }
            time.innerHTML = `Time: ${minutes} : ${seconds}`;
            score.innerHTML = `Total Score: ${totalscore}`;

        }, 1000);

        // Add event listener to the submit button
        submit.addEventListener('click', () => {
            flagforsubmit = 1;
            if (flagcheckonce == 1) {
                flagcheckonce = 0;
                if (i >= 10 && i < 15) {
                    checkSelectedOptiontf(i-10);
                } else {
                    checkSelectedOption(i);
                }
            }


        });
        let next = document.getElementById('next');
        next.addEventListener('click', () => {
            flagcheckonce = 1;
            if (flagforsubmit == 1) {
                i++; // Increment i
                if (i < 10) {
                    // If i is less than or equal to 10, update the question and options
                    updateQuestionAndOptions(i);
                }
                if (i >= 10 && i < 15) {
                    updateQuestionAndOptionstf(i-10);
                }
                if (i == 15) {
                    let quizbox = document.getElementById('quizbox');
                    let timeandscore = document.getElementById('timeandscore');
                    let score = document.getElementById('score');
                    let finalpage = document.getElementById('finalpage');
                    let fireit = document.getElementById('fireit');
                    quizbox.style.display = 'none';
                    timeandscore.style.display = 'none';
                    score.style.display = 'none';
                    finalpage.style.display = "block";
                    fireit.id = "footerforfinal";
                    let quizType1 = String(quizType);
                    let hidecurrentcategory = document.getElementById(`${quizType1}`);
                    hidecurrentcategory.style.display = "none";
                    let finalscoretext=document.getElementById('finalscoretext');
                    finalscoretext.innerHTML="";
                    finalscoretext.innerHTML=`Your Total Score Is: ${totalscore}`;


                }
            }
        });

    } else if (quizType == "2") {

        toggle_elements();
        i=0;
        let question=document.getElementById('question');
        // randomNumber = Math.floor(Math.random() * 31);
        // const uniqueRandomNumbers = generateUniqueRandomNumbers(15, 0, 30);
        // console.log(typeof uniqueRandomNumbers);
            // let i = 0;
            // question.innerHTML= oop[i].ques;
            // changeOptionText(i);
            // submit.addEventListener('click', ()=>{
            //     checkSelectedOption(i);
            // })

            // Initialize i to 1

// Function to update the question and options

updateQuestionAndOptions(i);
let minutes=0;
let seconds=0;
let time=document.getElementById('time');
time.innerHTML=`Time: ${minutes} : ${seconds}`;
let score=document.getElementById('score');
score.innerHTML=`Total Score: ${totalscore}`;


setInterval(() => {
    if (seconds !=60) {
        seconds++;
    }
    else{
        seconds=0;
        minutes++;
    }
    time.innerHTML=`Time: ${minutes} : ${seconds}`;
    score.innerHTML=`Total Score: ${totalscore}`;
    
}, 1000);

// Add event listener to the submit button
submit.addEventListener('click', () => {
    flagforsubmit=1;
    if (flagcheckonce==1) {
        flagcheckonce=0;
        if (i>=10 && i<15) {
            checkSelectedOptiontf(i-10);
        }else{
            checkSelectedOption(i);
        }
    }
    
    
});
let next= document.getElementById('next');
next.addEventListener('click',()=>{
    flagcheckonce=1;
    if (flagforsubmit==1)
    {
        i++; // Increment i
    if (i < 10) {
        // If i is less than or equal to 10, update the question and options
        updateQuestionAndOptions(i);
    } 
    if (i>=10 && i<15) {
        updateQuestionAndOptionstf(i-10);
    }
    if (i==15) {
        let quizbox=document.getElementById('quizbox');
        let timeandscore=document.getElementById('timeandscore');
        let score=document.getElementById('score');
        let finalpage=document.getElementById('finalpage');
        let fireit= document.getElementById('fireit');
        quizbox.style.display='none';
        timeandscore.style.display='none';
        score.style.display='none';
        finalpage.style.display="block";
        fireit.id="footerforfinal";
        let quizType1 = String(quizType);
        let hidecurrentcategory=document.getElementById(`${quizType1}`);
        hidecurrentcategory.style.display="none";
        let finalscoretext=document.getElementById('finalscoretext');
        finalscoretext.innerHTML="";
        finalscoretext.innerHTML=`Your Total Score Is: ${totalscore}`


    }
    }
});

    } else if (quizType == "3") {

        toggle_elements();
        i=0;
        let question=document.getElementById('question');
        // randomNumber = Math.floor(Math.random() * 31);
        // const uniqueRandomNumbers = generateUniqueRandomNumbers(15, 0, 30);
        // console.log(typeof uniqueRandomNumbers);
            // let i = 0;
            // question.innerHTML= oop[i].ques;
            // changeOptionText(i);
            // submit.addEventListener('click', ()=>{
            //     checkSelectedOption(i);
            // })

            // Initialize i to 1

// Function to update the question and options

updateQuestionAndOptions(i);
let minutes=0;
let seconds=0;
let time=document.getElementById('time');
time.innerHTML=`Time: ${minutes} : ${seconds}`;
let score=document.getElementById('score');
score.innerHTML=`Total Score: ${totalscore}`;


setInterval(() => {
    if (seconds !=60) {
        seconds++;
    }
    else{
        seconds=0;
        minutes++;
    }
    time.innerHTML=`Time: ${minutes} : ${seconds}`;
    score.innerHTML=`Total Score: ${totalscore}`;
    
}, 1000);

// Add event listener to the submit button
submit.addEventListener('click', () => {
    flagforsubmit=1;
    if (flagcheckonce==1) {
        flagcheckonce=0;
        if (i>=10 && i<=15) {
            checkSelectedOptiontf(i-10);
        }else{
            checkSelectedOption(i);
        }
    }
    
    
});
let next= document.getElementById('next');
next.addEventListener('click',()=>{
    flagcheckonce=1;
    if (flagforsubmit==1)
    {
        i++; // Increment i
    if (i < 10) {
        // If i is less than or equal to 10, update the question and options
        updateQuestionAndOptions(i);
    } 
    if (i>=10 && i<15) {
        updateQuestionAndOptionstf(i-10);
    }
    if (i==15) {
        let quizbox=document.getElementById('quizbox');
        let timeandscore=document.getElementById('timeandscore');
        let score=document.getElementById('score');
        let finalpage=document.getElementById('finalpage');
        let fireit= document.getElementById('fireit');
        quizbox.style.display='none';
        timeandscore.style.display='none';
        score.style.display='none';
        finalpage.style.display="block";
        fireit.id="footerforfinal";
        let quizType1 = String(quizType);
        let hidecurrentcategory=document.getElementById(`${quizType1}`);
        hidecurrentcategory.style.display="none";
        let finalscoretext=document.getElementById('finalscoretext');
        finalscoretext.innerHTML="";
        finalscoretext.innerHTML=`Your Total Score Is: ${totalscore}`

    }
    }
});

    } else if (quizType == "4") {
        toggle_elements();
        i=0;
        let question=document.getElementById('question');
        // randomNumber = Math.floor(Math.random() * 31);
        // const uniqueRandomNumbers = generateUniqueRandomNumbers(15, 0, 30);
        // console.log(typeof uniqueRandomNumbers);
            // let i = 0;
            // question.innerHTML= oop[i].ques;
            // changeOptionText(i);
            // submit.addEventListener('click', ()=>{
            //     checkSelectedOption(i);
            // })

            // Initialize i to 1

// Function to update the question and options

updateQuestionAndOptions(i);
let minutes=0;
let seconds=0;
let time=document.getElementById('time');
time.innerHTML=`Time: ${minutes} : ${seconds}`;
let score=document.getElementById('score');
score.innerHTML=`Total Score: ${totalscore}`;


setInterval(() => {
    if (seconds !=60) {
        seconds++;
    }
    else{
        seconds=0;
        minutes++;
    }
    time.innerHTML=`Time: ${minutes} : ${seconds}`;
    score.innerHTML=`Total Score: ${totalscore}`;
    
}, 1000);

// Add event listener to the submit button
submit.addEventListener('click', () => {
    flagforsubmit=1;
    if (flagcheckonce==1) {
        flagcheckonce=0;
        if (i>=10 && i<=15) {
            checkSelectedOptiontf(i-10);
        }else{
            checkSelectedOption(i);
        }
    }
    
    
});
let next= document.getElementById('next');
next.addEventListener('click',()=>{
    flagcheckonce=1;
    if (flagforsubmit==1)
    {
        i++; // Increment i
    if (i < 10) {
        // If i is less than or equal to 10, update the question and options
        updateQuestionAndOptions(i);
    } 
    if (i>=10 && i<15) {
        updateQuestionAndOptionstf(i-10);
    }
    if (i==15) {
        let quizbox=document.getElementById('quizbox');
        let timeandscore=document.getElementById('timeandscore');
        let score=document.getElementById('score');
        let finalpage=document.getElementById('finalpage');
        let fireit= document.getElementById('fireit');
        quizbox.style.display='none';
        timeandscore.style.display='none';
        score.style.display='none';
        finalpage.style.display="block";
        fireit.id="footerforfinal";
        let quizType1 = String(quizType);
        let hidecurrentcategory=document.getElementById(`${quizType1}`);
        hidecurrentcategory.style.display="none";
        let finalscoretext=document.getElementById('finalscoretext');
        finalscoretext.innerHTML="";
        finalscoretext.innerHTML=`Your Total Score Is: ${totalscore}`


    }
    }
});

    } else if (quizType == "5") {
        toggle_elements();
        i=0;
        let question=document.getElementById('question');
        // randomNumber = Math.floor(Math.random() * 31);
        // const uniqueRandomNumbers = generateUniqueRandomNumbers(15, 0, 30);
        // console.log(typeof uniqueRandomNumbers);
            // let i = 0;
            // question.innerHTML= oop[i].ques;
            // changeOptionText(i);
            // submit.addEventListener('click', ()=>{
            //     checkSelectedOption(i);
            // })

            // Initialize i to 1

// Function to update the question and options

updateQuestionAndOptions(i);
let minutes=0;
let seconds=0;
let time=document.getElementById('time');
time.innerHTML=`Time: ${minutes} : ${seconds}`;
let score=document.getElementById('score');
score.innerHTML=`Total Score: ${totalscore}`;


setInterval(() => {
    if (seconds !=60) {
        seconds++;
    }
    else{
        seconds=0;
        minutes++;
    }
    time.innerHTML=`Time: ${minutes} : ${seconds}`;
    score.innerHTML=`Total Score: ${totalscore}`;
    
}, 1000);

// Add event listener to the submit button
submit.addEventListener('click', () => {
    flagforsubmit=1;
    if (flagcheckonce==1) {
        flagcheckonce=0;
        if (i>=10 && i<=15) {
            checkSelectedOptiontf(i-10);
        }else{
            checkSelectedOption(i);
        }
    }
    
    
});
let next= document.getElementById('next');
next.addEventListener('click',()=>{
    flagcheckonce=1;
    if (flagforsubmit==1)
    {
        i++; // Increment i
    if (i < 10) {
        // If i is less than or equal to 10, update the question and options
        updateQuestionAndOptions(i);
    } 
    if (i>=10 && i<15) {
        updateQuestionAndOptionstf(i-10);
    }
    if (i==15) {
        let quizbox=document.getElementById('quizbox');
        let timeandscore=document.getElementById('timeandscore');
        let score=document.getElementById('score');
        let finalpage=document.getElementById('finalpage');
        let fireit= document.getElementById('fireit');
        quizbox.style.display='none';
        timeandscore.style.display='none';
        score.style.display='none';
        finalpage.style.display="block";
        fireit.id="footerforfinal";
        let quizType1 = String(quizType);
        let hidecurrentcategory=document.getElementById(`${quizType1}`);
        hidecurrentcategory.style.display="none";
        let finalscoretext=document.getElementById('finalscoretext');
        finalscoretext.innerHTML="";
        finalscoretext.innerHTML=`Your Total Score Is: ${totalscore}`


    }
    }
});

    }
})
// let newScore=totalscore;
// if (typeof(Storage) !== "undefined") {
//     const currentHighScore = localStorage.getItem("highScore");

//     if (!currentHighScore || newScore > parseInt(currentHighScore)) {
//         localStorage.setItem("highScore", totalscore);
//         console.log("New highest score stored: " + newScore);
//     } else {
//         console.log("New score is not higher than the current highest score.");
//     }
// } else {
//     console.log("Local storage is not supported in this browser.");
// }