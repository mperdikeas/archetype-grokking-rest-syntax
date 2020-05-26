import {assert} from 'chai';
import AssertionError  from 'assertion-error';
assert.isOk(AssertionError);



describe('spread syntax', function () {
    it('test-000', function() {
        const v = {a: 1, b: 2, c: 3, d: {e: 5}};
        const v2 = {...v};
        assert.strictEqual(JSON.stringify(v), JSON.stringify(v2));
        assert.notEqual(v, v2);
        assert.notStrictEqual(v, v2);
        assert.deepEqual(v, v2);
    });
    it('test-001', function() {
        const deep = {theAnswer: 42};
        const v = {a: 1, b: 2, c: 3};
        const v2 = {...v};
        assert.strictEqual(JSON.stringify(v), JSON.stringify(v2));
        assert.notEqual(v, v2);
        assert.notStrictEqual(v, v2);
        assert.deepEqual(v, v2);
        assert.strictEqual(v.c, v2.c);
    });

    it('test-002', function() {
        const deep = {d: 42};
        const v = {a: 1, b: 2, c: 3, d: deep};

        const f = ({a, ...rest}) => {
            assert.strictEqual(a, v.a);
            assert.strictEqual(rest.b, v.b);
            assert.strictEqual(rest.c, v.c);
            assert.strictEqual(rest.d, v.d);
        };

        f(v);

        const g = (v2) => {
            assert.strictEqual(v2, v);
        };

        g(v);

        const h = (v2) => {
            assert.notStrictEqual(v2, v);
            assert.deepEqual(v2, v);
            assert.strictEqual(v2.d, v.d);            
        };
        h({...v});
        
    });        
});


