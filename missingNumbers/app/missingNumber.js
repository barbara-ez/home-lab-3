app=
{

findMissing: function(arr1,arr2)
    
    {
    var missing = 0;
    var same=false;
    var count=0;
    
        for ( var i = 0; i < arr2.length; i++ ) 
        {
              same=false;
              for ( var j = 0; j < arr1.length; j++ ) {
              if (arr2[i]==arr1[j]) {
               same=true;
               
              }
              
              }
          if(same===false)
          {
            missing=arr2[i];
            count++;
          }
        }
        return missing;
    
    }

}
module.exports=app;