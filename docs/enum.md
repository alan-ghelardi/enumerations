<a name="Enum"></a>

## Enum
This is the common base class for all enumeration types. Enum constants are
immutable; once declared they can't be modified.

Enum types are iterable, that's to say, they inherit a [Symbol.iterator]
method implemented by this class. Therefore, enum types may be used in "for
of" blocks in order to iterate over its declared constants.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the enum constant, exactly as declared           in the enum declaration. |
| ordinal | <code>number</code> | An integer indicating the ordinal of this           enumeration constant (its position in its enum declaration, where           the initial constant is assigned a value of zero). |
| type | <code>string</code> | A string representing the type of this constant           (actually, the name of the class that this constant extends from). |
| _ | <code>string</code> | An alias to [Enum.toString](Enum.toString). This property offers           a short and convenient way of obtaining the string representation           of this constant. |


* [Enum](#Enum)
    * [new Enum()](#new_Enum_new)
    * _instance_
        * [.isConstantOf(anEnum)](#Enum+isConstantOf) ⇒ <code>boolean</code>
        * [.isSameTypeAs(that)](#Enum+isSameTypeAs) ⇒ <code>boolean</code>
        * [.compareTo(that)](#Enum+compareTo) ⇒ <code>number</code>
        * [.toString()](#Enum+toString) ⇒ <code>string</code>
    * _static_
        * [.values(...constants)](#Enum.values)
        * [.valueOf()](#Enum.valueOf) ⇒ <code>[Enum](#Enum)</code>

<a name="new_Enum_new"></a>

### new Enum()
Enum types may not be instantiated through the new operator. The
constructor guarantees such invariant by throwing an AssertionError
whenever called.

**Throws**:

- <code>AssertionError</code> Whenever that one uses the new operator with an enum type.

<a name="Enum+isConstantOf"></a>

### enum.isConstantOf(anEnum) ⇒ <code>boolean</code>
Returns true whether this enum constant bellongs to the specified enum
class or false otherwise.

**Kind**: instance method of <code>[Enum](#Enum)</code>  
**Returns**: <code>boolean</code> - True or false indicating waht is explained above.  

| Param | Type | Description |
| --- | --- | --- |
| anEnum | <code>[Enum](#Enum)</code> | Any enum class. |

<a name="Enum+isSameTypeAs"></a>

### enum.isSameTypeAs(that) ⇒ <code>boolean</code>
Returns true whether this constant bellongs to the same enum class of the
specified constant or false otherwise.

**Kind**: instance method of <code>[Enum](#Enum)</code>  
**Returns**: <code>boolean</code> - True or false indicating what is explained above.  

| Param | Type | Description |
| --- | --- | --- |
| that | <code>[Enum](#Enum)</code> | Any enum constant. |

<a name="Enum+compareTo"></a>

### enum.compareTo(that) ⇒ <code>number</code>
Compares this enum constant with the specified object for order (by using
the ordinal property). Returns a negative integer, 0 or a positive integer
if this enum constant is less than, equal to or greather than the specified
parameter. Enum constants are only comparable to other enum constants of
the same type. If a enum constant of a different type or even an arbitrary
object is passed as a parameter, an error is thrown.

**Kind**: instance method of <code>[Enum](#Enum)</code>  
**Returns**: <code>number</code> - A negative integer, zero or a positive integer following
         the algorithm cited above.  
**Throws**:

- <code>Error</code> If the preconditions mentioned above aren't satisfied.


| Param | Type | Description |
| --- | --- | --- |
| that | <code>[Enum](#Enum)</code> | An enum constant of the same type of this enum constant. |

<a name="Enum+toString"></a>

### enum.toString() ⇒ <code>string</code>
Returns a string representing this enum constant. By default, this method
returns the name of this constant (same as the property name). However,
this method may be overriden in order to provide a more friendly string
form of the enum constant.

**Kind**: instance method of <code>[Enum](#Enum)</code>  
**Returns**: <code>string</code> - String representation of this constant.  
<a name="Enum.values"></a>

### Enum.values(...constants)
Initializes this enum type, by creating the specified constant values. Each
constant will inherit the prototype of this enum and will be added as
immutable properties of the current enum subclass. Enum constants are
immutable and and may not be configured. Further more, as a side efect of
calling this method, the own enum become immutable and will no longer be
possible to modify it.

Notice that isn't possible to call this method directly in the class Enum.
Rather, it's necessary to create a subclass of Enum, which will act as the
base for the new enum type. In addition, this method must be invoked once;
any attempt of calling it on an initialized enum typ will result in an
AssertionError.

For more details about how to use this method, check out the
[examples](https://github.com/alan-ghelardi/enumerations/tree/master/examples).

**Kind**: static method of <code>[Enum](#Enum)</code>  
**Throws**:

- <code>AssertionError</code> If the invariants mentioned previously aren't respected.


| Param | Type | Description |
| --- | --- | --- |
| ...constants | <code>string</code> &#124; <code>object</code> | Rest parameters representing the enum declarations. If a          string is specified it will be the name of the constant. If the          enum declaration is an object, it must respect the following form:          ```js {name: {property1: value1, property2: value2, propertyN:          valueN}} ``` In other words, each enum declaration must be a plain          object with one and only one property (that will be the enum          constant's name) and a set of members (attributes and/or methods)          assigned to this property. Any violation to these invariants will          cause an AssertionError. |

<a name="Enum.valueOf"></a>

### Enum.valueOf() ⇒ <code>[Enum](#Enum)</code>
Returns the enum constant whose the result of an invokation of the method
[Enum.toString](Enum.toString) matches the provided parameter name. The name must
match exactly the return value of [Enum.toString](Enum.toString); extraneous
whitespaces are not permitted.

**Kind**: static method of <code>[Enum](#Enum)</code>  
**Returns**: <code>[Enum](#Enum)</code> - The enum constant whose #toString() matches the specified
         name.  
**Throws**:

- <code>AssertionError</code> If the provided name is not a string or if there is no an enum
          constant that corresponds to the specified name.

