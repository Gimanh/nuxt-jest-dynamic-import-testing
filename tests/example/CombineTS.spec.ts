import "jest"
import {mount} from '@vue/test-utils'
import Logo from '~/components/Logo.vue'
import {variable} from "~/testing_examples/JS_File";
import {variableTs} from "~/testing_examples/TS_Export";
import mod from '~/testing_examples/JS_File_Export_Default'
import {ClassPT} from "~/testing_examples/TS_Class";
import ExDef from '~/testing_examples/TS_Class_Export_Default'
import {ClassPTJS} from "~/testing_examples/JS_Class";
import ExDefJs from '~/testing_examples/JS_Class_Export_Default'

describe('Combine', () => {
    test('is a Vue instance', () => {
        const wrapper = mount(Logo);
        expect(wrapper.isVueInstance()).toBeTruthy()
    });
    test('Variable from JS file', () => {
        expect(variable()).toBe('string');
    });
    test('Variable from TS file', () => {
        expect(variableTs()).toBe('string ts');
    });
    test('Export default JS', () => {
        expect(mod.moduleFunc()).toBe('moduleFunc string');
    });
    test('Export TS Class', () => {
        let str = 'classs';
        let inst = new ClassPT(str);
        expect(inst.getStr()).toBe(str);
    });
    test('Export default TS Class', () => {
        let str = 'classsExDef';
        let inst = new ExDef(str);
        expect(inst.getStr()).toBe(str);
    });
    test('Export JS Class', () => {
        let str = 'classsExDefClassPTJS';
        let inst = new ClassPTJS(str);
        expect(inst.getStr()).toBe(str);
    });
    test('Export default JS Class', () => {
        let str = 'classsExDefClassPTJS';
        let inst = new ExDefJs(str);
        expect(inst.getStr()).toBe(str);
    });
});
