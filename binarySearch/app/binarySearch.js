
   	Array.prototype.toTwenty = function()
	{
    var start = 1;
    var end = 20;

    for(var i = start; i <= end; i += 1){
        this.push(i);
    }
   return this;
   }

   Array.prototype.toForty = function()
	{
    var start = 2;
    var end = 40;

    for(var i = start; i <= end; i += 2){
        this.push(i);
    }
   return this;
   }

   Array.prototype.toOneThousand = function()
	{
    var start = 10;
    var end = 1000;

    for(var i = start; i <= end; i += 10){
        this.push(i);
    }
   return this;
   }


   Array.prototype.search = function(targetValue)
	{
	        var array=[1,2,3,4];
            var min = 0;
            var max = this.length-1;
            var index=-1;
            var count=0;
            
            var length=this.length;
            
            while(min<=max)
            {
            	index=max;
                if(this[max]===targetValue)
                {
                    return {count,index,length};
                }
                index=Math.floor((min+max)/2);
                
                
                if(this[index]===targetValue)
                {
                    return {count,index,length};
                }
                else if(this[index]<targetValue)
                {
                   min=index+1; 
                }
                else
                {
                    max=index-1;
                }
                count++;
            }
           index=-1;
           count=0;
           return {count,index,length};
     };
module.exports=Array;
