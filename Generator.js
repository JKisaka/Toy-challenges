function studentGrade(score){
    if( score>=79 && score <=100){
        return "A";
    }else if (score >=60 && score <79){
        return "B";
    }else if (score >=50 && score< 59){
        return "C";
    }else if (score >=40 && score <49){
        return "D";
    }else{
        return "E";
    }
}

console.log(studentGrade(97));
console.log(studentGrade(81));
console.log(studentGrade(73));
console.log(studentGrade(67));
console.log(studentGrade(49));
console.log(studentGrade(15));

