var  vm = new Vue(
  {el: '#mori',  data: {name:"mori",lastname:"shabani",address: "Mumbai"},
                    methods: {
                        method_function : function() {
                          return "I am "+this.name +" "+ this.lastname;
                                }
                              }
                            
 }
)




var hi = new Vue({

el:'#hello',
data:{
	title:'i am a title for hello',
	message:'i am a message for hello'
}

})

// morteza

//
// var hi = new Vue(
//   {el:'#mori',
//                 data:  {name:"morteza",lastname:"shabani_pur"},
//                 methods:
//                       { method_function : function(){ return "hello mori i am method";}
//                       }
//                     }
//             }
// )
