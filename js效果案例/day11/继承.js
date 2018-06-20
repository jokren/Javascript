function Person(_name, _age){
    this.name = _name;
    this.age = _age;
}

Person.prototype.eat = function(str){
    console.log("我能吃" + str);
}


// Employee 程序猿
function Employee(_num, name, age){
    this.num = _num;//每一个员工有一个编号
    Person.apply(this, arguments);
}

Employee.prototype = new Person();
Employee.prototype.coding = function(){
    console.log("我是一个程序猿, 代码使我快乐");
}

// override 子类重写了父类的方法
Employee.prototype.eat = function(str, str1){
    //  我比以前能加能吃,所以我的吃 方法要加强
    console.log("我能吃很多东西" + str);
}


function Manager(_money, _name, _age){
    this.money = _money
    Person.apply(this, arguments)
}

Manager.prototype = new Person();
//管理者 多了一个BB的方法
Manager.prototype.bb = function(){

}


