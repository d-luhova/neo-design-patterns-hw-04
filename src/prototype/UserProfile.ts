import { UserProfilePrototype } from "./UserProfilePrototype";

class Permissions {
    constructor(
      public canEditUsers: boolean,
      public canApproveBudget: boolean,
      public canAccessInternalTools: boolean
    ) {}
  
    clone(): Permissions {
      return new Permissions(
        this.canEditUsers,
        this.canApproveBudget,
        this.canAccessInternalTools
      );
    }
  }

export class UserProfile implements UserProfilePrototype {
    public permissions: Permissions;
    constructor(
      public username: string,
      public department: 'finance' | 'engineering' | 'marketing',
      permissions: Permissions | { canEditUsers: boolean; canApproveBudget: boolean; canAccessInternalTools: boolean }
    ) {
      if (permissions instanceof Permissions) {
        this.permissions = permissions;
      } else {
        this.permissions = new Permissions(
          permissions.canEditUsers,
          permissions.canApproveBudget,
          permissions.canAccessInternalTools
        );
      }
    }
    clone() {
      return new UserProfile(this.username, this.department, this.permissions.clone());
    }
  }