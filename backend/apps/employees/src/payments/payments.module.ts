import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import Payment from '@app/entities/classes/payment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Payment])
  ],
  providers: [PaymentsService],
  controllers: [PaymentsController]
})
export class PaymentsModule {

}
