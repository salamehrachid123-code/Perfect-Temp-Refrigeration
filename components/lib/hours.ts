export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  isOpen: boolean;
}

export const businessHours: BusinessHours[] = [
  { day: 'Monday', open: '07:00', close: '17:00', isOpen: true },
  { day: 'Tuesday', open: '07:00', close: '17:00', isOpen: true },
  { day: 'Wednesday', open: '07:00', close: '17:00', isOpen: true },
  { day: 'Thursday', open: '07:00', close: '17:00', isOpen: true },
  { day: 'Friday', open: '07:00', close: '17:00', isOpen: true },
  { day: 'Saturday', open: '00:00', close: '00:00', isOpen: false },
  { day: 'Sunday', open: '00:00', close: '00:00', isOpen: false },
];

export function isCurrentlyOpen(): boolean {
  const now = new Date();
  const currentDay = now.getDay(); // 0 = Sunday, 1 = Monday, etc.
  const currentTime = now.getHours() * 100 + now.getMinutes();
  
  // Convert to our business day format (Monday = 1, Sunday = 0)
  const businessDay = currentDay === 0 ? 6 : currentDay - 1;
  const todayHours = businessHours[businessDay];
  
  if (!todayHours.isOpen) {
    return false;
  }
  
  const openTime = parseInt(todayHours.open.replace(':', ''));
  const closeTime = parseInt(todayHours.close.replace(':', ''));
  
  return currentTime >= openTime && currentTime <= closeTime;
}

export function getNextOpenTime(): string {
  const now = new Date();
  const currentDay = now.getDay();
  const businessDay = currentDay === 0 ? 6 : currentDay - 1;
  
  // Check if we're closed today
  if (!businessHours[businessDay].isOpen) {
    // Find next open day
    for (let i = 1; i <= 7; i++) {
      const nextDay = (businessDay + i) % 7;
      if (businessHours[nextDay].isOpen) {
        return `Monday at ${businessHours[nextDay].open}`;
      }
    }
  }
  
  // If we're open today but closed now, return tomorrow
  const tomorrow = (businessDay + 1) % 7;
  if (businessHours[tomorrow].isOpen) {
    return `Tomorrow at ${businessHours[tomorrow].open}`;
  }
  
  return 'Monday at 07:00';
}
