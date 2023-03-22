import { observable, action, makeObservable } from 'mobx';

class UserStore {
  subscribedCompanies = [];
  subscribedUsers = []

  constructor() {
    makeObservable(this, {
      subscribedCompanies: observable,
      subscribedUsers: observable,
      subscribeCompany: action,
      unsubscribeCompany: action,
      subscribeUser: action,
      unsubscribeUser: action
    });
  }

  subscribeCompany(company) { 
    this.subscribedCompanies.push(company) 

  }

  unsubscribeCompany(company) {
    this.subscribedCompanies = this.subscribedCompanies.filter(companyName => companyName !== company)
    
  }

  subscribeUser(user) {
    this.subscribedUsers.push(user)
  }

  unsubscribeUser(user) {
    this.subscribedUsers = this.subscribedUsers.filter(username => username !== user)
  }
}

const userStore = new UserStore()
export default userStore