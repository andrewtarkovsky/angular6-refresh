import { Injectable } from '@angular/core';
import {TestsuperService} from './testsuper.service';

export class TestService {

  constructor(private superservice: TestsuperService) { }
}
