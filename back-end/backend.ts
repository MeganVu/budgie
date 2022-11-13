import {intBackend} from './intBackend'
import { initializeApp } from 'firebase/app'
import { getDatabase, ref,set } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyCFMZQG9qXrWUimvvzj-knHNulX-IKLXh0",

  authDomain: "budgie-957db.firebaseapp.com",

  projectId: "budgie-957db",

  storageBucket: "budgie-957db.appspot.com",

  messagingSenderId: "164376495275",

  appId: "1:164376495275:web:fd176cae61cbf9e5a823ee"
};

const app = initializeApp(firebaseConfig)

const database = getDatabase(app)

export class backend implements intBackend 
{
  private username: string;
  private password: string;
  private points: number;
  private budgetTransactions: string[];
  private storePurchases: boolean[];
  private name: string;
  private monthlyLeft: number;
  private monthlySpent: number;

  public getName(): string 
  {
    return this.name;
  }

  public getLeft(): number
  {
    return this.monthlyLeft;
  }

  public getSpent(): number
  {
    return this.monthlySpent;
  }

  public getPoints(): number
  {
    return this.points;
  }

  public addPoints(): number
  {
    this.points += 1;
    set(ref(database,'users/'),
      {
        password: this.password,
        points: this.points
      }
    )
    return this.points;
  }

  public removePoints(): number
  {
    this.points -= 1;
    set(ref(database,'users/'),
    {
      password: this.password,
      points: this.points
    })
    return this.points;
  }

  public login(username:string,password:string): string
  {
    let userCollection = {password: "", points: 0};
    if (password == userCollection.password)
    {
      this.points = userCollection.points
      this.username = username
      return "Login success!"
    } else throw new Error("Incorrect email or password");
  }

  public signUp(username:string,password:string): string
  {
    this.points = 0
    this.username = username
    this.password = password

    set(ref(database,'users/'),
    {
      password: this.password,
      points: this.points
    })

    return "Sign up success!"
  }

  public newPurchase()
  {

  }

  public addTransaction(amount:number,category:string,note:string)
  {
    let amountText = amount.toString();
    let transactionstring = amountText.concat(category,note);
    set(ref(database,'users/'),
    {
      budgetTransactions: transactionstring
    })
  }

  public removeTransaction()
  {

  }

}