const NAME_ERROR = new Error()

class FamilyTree {
  constructor (name) {
    if(!name || typeof name !== 'string'){
      throw NAME_ERROR
    }
    this.value = name;
    this.children = [];
  };

  insert(childName){
    let newNode = new FamilyTree(childName);
    this.children.push(newNode)
  };

  familySize(){
    let count = 1;
    this.children.forEach(currentChild => count ++);
    return count;
  };

  findMember(memberName, node = this){
    //basic case
    if(node.value === memberName){
      return node;
    }
    if(!node.children.length){
      return null;
    }

    for(let child of node.children){
      const currentChild = this.findMember(memberName, child);
      if(currentChild){
        return currentChild;
      }
    }
    return undefined;
    
  };

  log(){
    let output = '';
    for(let selfProp in this){

      if(selfProp === 'value'){
        output += this[selfProp] + '\n';
      }else if(this[selfProp].length){
        for(let child of this[selfProp]){
          output += '--' + child.log();
        }
      }else{
        output = '--' + output;
      }
     
    }
    return `--${output}`;
  }

}

module.exports = FamilyTree;

