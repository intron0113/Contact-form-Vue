<template>
 <div>
  <router-view></router-view>
 </div>
</template>
<style>
.form {
  margin: 100px auto;
  width: 800px;
  border-radius: 10px;
  border: 2px solid rgb(51, 255, 255);
}

.form-header{
  position: relative;
  height: 50px;
  background-color: rgba(51, 255, 255,.5);
}
.form-header p {
  color: rgba(0, 0, 0,.6);
  padding:10px 0;
  margin-top: 0;
  font-size: 20px;
  text-align: center;
}

.form-step{
  position:absolute;
  top:0;
  left: 0;
  border-radius: 10px;
  background-color: blue;
  color: white;
}

.form-main{
  font-size: 18px;
padding: 10px 0 30px 30px;
}

.next-button{
  text-align: center;
}
.btn{
  border-radius: 5px;
  background-color: green;
  padding: 20px;
  text-align: center;
  color: white;
  margin: 0 30px;
}
</style>