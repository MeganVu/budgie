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

  public getPoints(): number
  {
    return this.points;
  }

  public login()
  {

  }

  public signUp()
  {

  }

  public newPurchase()
  {

  }

  public addTransaction()
  {

  }

  public removeTransaction()
  {

  }

}