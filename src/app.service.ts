/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize';

@Injectable()
export class AppService {
  public async getHello() {
    const sequelize = new Sequelize('liveData', 'postgres', 'root', {
      host: 'localhost',
      dialect: 'postgres',
    });
    try {
      await sequelize.authenticate();  
      console.log('connected');   
    } catch (error) {
      console.log('not connected');
      console.error(error);
    }
    return 'Hello World!';
  }
}
