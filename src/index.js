module.exports = function toReadable (number) {
		NUMBERS = {
		0:'zero',
		1:'one',
		2:'two',
		3:'three',
		4:'four',
		5:'five',
		6:'six',
		7:'seven',
		8 : 'eight',
		9:'nine',
		10: 'ten',
		11:'eleven',
		12:'twelve',
		13:'thirteen',
		14:'fourteen',
		15:'fifteen',
		16:'sixteen',
		17:'seventeen',
		18:'eighteen',
		19:'nineteen',
		20:'twenty',
		30:'thirty',
		40:'forty',
		50:'fifty',
		60:'sixty',
		70:'seventy',
		80:'eighty',
		90:'ninety'
	}
	s = 
	str='';
	if ((number >= 0)&&(number<10)){
			str += NUMBERS[number];
	}
	else if ((number >= 10)&&(number<20)) {
		str += NUMBERS[number];
	}
	num = String(number);
	var i;
	var arr =[];
	for(i=num.length-1;i>=0;i--){
		//122-->221
		
	}
	for(i=0;i<num.length;i++){
		arr.push(num[i]);
		if(num.length==3){
			if(i==0){
				str += NUMBERS[Number(num[i])];
				str +=' hundred';
				if((Number(num[i+1])==0)&&(Number(num[i+2])==0)){
					str+='';
				}
				else{
					str+=' ';
				}
			}
			if ((i==1)&&(Number(num[i])!=0)&&(Number(num[i])!=1)){
				str += NUMBERS[Number(num[i])*10];
				if (Number(num[i+1])!=0){
					str+=' ';
				}
				
			}
			else if ((i==1)&&(Number(num[i])==1)){
				str += NUMBERS[Number(num[i])*10 + Number(num[i+1])]
			}
			
			if ((i==2)&&(Number(num[i])!=0)&&(Number(num[i-1])!=1) ){
				str += NUMBERS[Number(num[i])];
			}
			
		}
		if((num.length==2)&&(number>=20)){
			if ((i==0)&&(Number(num[i])!=0)&&(Number(num[i])>1)){
				str += NUMBERS[Number(num[i])*10];
				if (Number(num[i+1])!=0){
					str+=' ';
				}
				
			}
			
			if ((i==1)&&(Number(num[i])!=0)){
				str += NUMBERS[Number(num[i])];
			}
		}
		
		 
	}
	return str;
}
