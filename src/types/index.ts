import { Web3AuthNoModal } from '@web3auth/no-modal';
import { OpenloginUserInfo } from '@web3auth/openlogin-adapter';

export interface IAppContextState {
  web3auth: Web3AuthNoModal | null;
  userInfo:
    | (Partial<OpenloginUserInfo> & {
        account?: string;
      })
    | null;
  updateUserInfo: (userInfo: Partial<OpenloginUserInfo> | null) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
  isOnboarded: boolean;
  setIsOnboarded: (isOnboarded: boolean) => void;
  handleOnboardedUser: (address: string) => void;
  handleLogout: () => Promise<void>;
}

export type AuthOptions = 'google' | 'github' | 'email' | 'wallet';

export type UserType = 'client' | 'auditor';
