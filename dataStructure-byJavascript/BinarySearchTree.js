class Node{
    constructor(data,left=null,right=null){
        this.data=data;
        this.left=left;
        this.right=right;
    }
}


class bst{
    bts(){
        this.root=null;
    }
    add(data){
        const node=this.root;
        if(node==null){
            this.root=new Node(data);
            return;
        }
        else{
            const searchTree=function(node){
                if(data<node.data){
                    if(node.left==null){
                        node.left=new Node(data);
                        return;
                    }
                    else{
                        return searchTree(node.left);
                    }
                }
                else if(data>node.data){
                    if(node.right==null){
                        node.right=new Node(data);
                        return;
                    }
                    else{
                        return searchTree(node.right);
                    }
                }
                else return null;
            }
            return searchTree(node);
        }
    }
    findMax(){
        let current=this.root;
        while(current.right!=null){
            current=current.right;
        }
        return current.data;
    }
    findMin(){
        let current=this.root;
        while(current.left!=null){
            current=current.left;
        }
        return current.data;
    }
    isPresent(data){
        let current=this.root;
        while(current){
            if(data==current.data){
                return true;
            }
            if(data<current.data){
                current=current.left;
            }
            else{
                current=current.right;
            }
        }
        return false;
    }
}


let cc=new bst();
cc.add(4);
cc.add(3);
cc.add(5);
console.log(cc.findMax());
console.log(cc.findMin());
console.log(cc.isPresent(3));
console.log(cc.isPresent(10));
