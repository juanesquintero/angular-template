import { Injectable } from '@angular/core';



class LocalStorage implements Storage {
  [name: string]: any;
  readonly length!: number;
  clear(): void { }
  getItem(key: string): string | null { return null }
  key(index: number): string | null { return null }
  removeItem(key: string): void { }
  setItem(key: string, value: string): void { }
}


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService implements Storage {

  [name: string]: any;
  length!: number;
  private storage: Storage;

  constructor() {
    if (typeof window !== 'undefined') {
      this.storage = window.localStorage;
    } else {
      this.storage = new LocalStorage();
    }
  }

  clear(): void {
    this.storage.clear();
  }

  getItem(key: string): string | null {
    return this.storage.getItem(key);
  }

  key(index: number): string | null {
    return this.storage.key(index);
  }

  removeItem(key: string): void {
    return this.storage.removeItem(key);
  }

  setItem(key: string, value: string): void {
    return this.storage.setItem(key, value);
  }
}
