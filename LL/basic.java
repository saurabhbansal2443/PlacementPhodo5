public class basic {
    public static void main(String[] args) {
        MyLinkedList list = new MyLinkedList();
        list.addLast(2);
        list.addLast(20);
        list.addLast(40);
        list.addFirst(100);
        list.addAt(99, 2);
        list.addAt(122, 4);
        // list.display();
        // list.size = 100 ;
        System.out.println(list.size());
    }
}

class Node {

    int data;
    Node next;

    Node(int data) {
        this.data = data;
        this.next = null;
    }
}

class MyLinkedList {
     private Node head;
     private Node tail;
     private int size;

    MyLinkedList() {
        head = tail = null;
        size = 0;
    }

    public void addLast(int val) {
        Node n = new Node(val);

        if (head == null) {
            head = n;
            tail = n;
        } else {
            tail.next = n;
            tail = tail.next; // tail = n
        }
        this.size++;
    }

    public void addFirst(int val) {
        Node n = new Node(val);

        if (head == null) {
            head = tail = n;
        } else {
            n.next = head;
            head = n;
        }
        this.size++;
    }

    public void addAt(int val , int idx){
        if(idx > size || idx < 0 ){
            return ;
        }else if ( idx == size){
            addLast(val);
        }else if ( idx == 0 ){
            addFirst(val);
        }else{
            Node n = new Node(val);
            Node temp = head ;
            while(idx>1){
                temp = temp.next;
                idx--;
            }
            Node temp2 = temp.next;
            temp.next = n ;
            n.next = temp2 ;
            this.size++;
        }
    }

    public void display() {
        Node temp = this.head;

        while (temp != null) {
            System.out.println(temp.data);
            temp = temp.next;
        }
    }

    public int size(){  //getter function 
        return this.size;
    }
}