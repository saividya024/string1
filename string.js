var str1="      siri";
var str2="vidya     ";
var str1trim=str1.trimStart();
var str2trim=str2.trimEnd();
console.log(str1trim)
console.log(str2trim)
var concat=str1trim.concat(str2trim);
console.log(concat)
var
com_uppercase=concat.toUpperCase();
console.log(com_uppercase)

//o/p:  siri
//  vidya
//  sirividya
// SIRIVIDYA

var extract=com_uppercase.slice(4,6);
 console.log(extract)
 var index_value=extract.indexOf("S");
console.log(index_value)
var lower_case=extract.toLowerCase();
console.log(lower_case)

// o/p:VI
//  -1
// vi

var char="S"
var concat=char.concat(lower_case)
console.log(concat)
var upper_case=concat.toUpperCase();
console.log(upper_case)
var last_extrct=upper_case.slice(-2,-1)
console.log(last_extrct)
//o/p:- Svi
// SVI
// 35 V

 var firststr="teju";
var secstr="siri"
console.log(firststr)
console.log(secstr)

var extract_first=firststr.slice(0,3);
console.log(extract_first)

var extract_sec=secstr.slice(-3)
console.log(extract_sec)

var concat_together=extract_first.concat(extract_sec)
console.log(concat_together)

var uppercase_all=concat_together.toUpperCase();
console.log(uppercase_all)

//o/p:- teju
// siri
// tej
// iri
// tejiri
// TEJIRI



 var str3="       siri        ";
 console.log(str3)
 
 var trim=str3.trim();
 console.log(trim)
 
 var first_char=trim.charAt(0);
 var last_char=trim.charAt(3);
 var first_uppercase=first_char.toUpperCase();
 var last_uppercase=last_char.toUpperCase();
 console.log(first_uppercase)
 console.log(last_uppercase)
 
 var specific_extract=trim.slice(1,3);
 console.log(specific_extract)
 
 var str4="vidya";
 console.log(str4)

//o/p:-      siri        
//  siri
//  S
//  I
//  ir
//  vidya

 var concat_str=specific_extract.concat(str4);
 console.log(concat_str)
//o/p:-  irvidya

 //"hello there , how are you " find the index of are word in the sentence

 var index="hello there , how are you";
 console.log(index)
 
 var index_of=index.indexOf('are');
 console.log(index_of)


//o/p:- hello there , how are you
//  18

