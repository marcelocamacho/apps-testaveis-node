import {expect,test,it} from "vitest";
import {getFutureDate} from './get-future-date'

test('Increase date with one year',()=>{

    const year = new Date().getFullYear()

    expect(getFutureDate(`${year}-08-02`).getFullYear()).toEqual(2024)

})