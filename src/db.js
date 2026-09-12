import Dexie, { type Table } from 'dexie';

// 1. Define the TypeScript interface for a Task / Schedule Item
export interface Task {
  id?: number;
  title: string;
  startTime: string; // e.g., "09:00"
  endTime: string;   // e.g., "10:30"
  date: string;      // YYYY-MM-DD format
  category: string;  // e.g., "Work", "Personal", "Health"
  completed: boolean;
  createdAt: Date;
}

// 2. Subclass Dexie to define the database
export class MakeTimeDatabase extends Dexie {
  tasks!: Table<Task>;

  constructor() {
    super('MakeTimeDatabase');
    // Schema definition: '++id' is auto-increment primary key
    // 'date' and 'completed' are indexed fields for quick queries
    this.version(1).stores({
      tasks: '++id, date, completed, category'
    });
  }
}

// 3. Export a single database instance
export const db = new MakeTimeDatabase();