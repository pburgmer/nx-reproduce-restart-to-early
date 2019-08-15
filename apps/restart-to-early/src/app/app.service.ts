import { Injectable, OnApplicationShutdown } from '@nestjs/common';

@Injectable()
export class AppService implements OnApplicationShutdown {
  getData(): { message: string } {
    return ({ message: 'Welcome to restart-to-early!' });
  }

  async onApplicationShutdown(signal?: string) {
    console.log('app shutdown started');
    await new Promise<void>(resolve => { 
      setTimeout(() => {
        console.log('app shutdown finished');
        resolve();
      }, 1000);
    });
  }
}
