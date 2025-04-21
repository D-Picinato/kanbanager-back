import { Board } from '@/domain/entities/board';
import { User } from '@/domain/entities/user';
import { MetaInputVO } from '@/domain/value-objects/meta/meta-input.vo';

export interface listBoardVO extends MetaInputVO<Board> {
  readonly userId: User['id'];
}
