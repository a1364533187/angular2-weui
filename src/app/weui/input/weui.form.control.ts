/**
 * @license
 * Copyright 厦门乾元盛世科技有限公司 All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file.
 */

import { HostBinding, Input, Renderer, ElementRef } from '@angular/core';
import { DefaultValueAccessor } from '@angular/forms';

/**
 * 输入类表单控件
 */
export abstract class WeUIFormControl extends DefaultValueAccessor {
    /** @internal */
    public static count = 0;

    /**
     * 控件ID
     */
    @Input() id: string;

    /**
     * 控件name
     */
    @Input() name: string;

    /**
     * 控件 label
     */
    @Input() label: string;

    /**
     * 是否禁用
     */
    @Input() disabled: boolean = false;

    /**
     * 额外样式
     */
    @Input() additionalCls: string;

    /**
     * value 属性为 input 元素设定值。<br>
     *
     * 对于不同的输入类型，value 属性的用法也不同：<ul>
     * <li> type="button", "reset", "submit" - 定义按钮上的显示的文本 </li>
     * <li> type="text", "password", "hidden" - 定义输入字段的初始值 </li>
     * <li> type="checkbox", "radio", "image" - 定义与输入相关联的值 </li>
     * </ul>
     *
     * <p>注释：&lt;input type="checkbox"&gt; 和 &lt;input type="radio"&gt; 中必须设置 <code>value</code> 属性。</p>
     * <p>注释：value 属性无法与 <input type="file"> 一同使用。</p>
     */
    @Input() value: any;

    /**
     * The internal data model
     *
     * @internal
     */
    protected _value: any = '';

    /**
     * The value of the input ngModel
     *
     * @internal (model -> view)
     */
    get innerValue() {
        return this._value;
    }

    /**
     * The value of the input ngModel
     *
     * @internal (view -> model)
     */
    set innerValue(newValue: any) {
        if (this._value !== newValue) {
            this._value = newValue;
            // view -> model -> outside world (ie. NgModel on this control)
            this.onChange(newValue);
        }
    }

    /**
     * 设置基本样式
     */
    @HostBinding('class') get controlClass() {
        return WeUIFormControl.getBasicControlCls();
    }

    /** @internal */
    public static registerControl(): string {
        return 'weui-control-' + (++WeUIFormControl.count).toString();
    }

    public static getBasicControlCls(): string {
        return 'weui-cell weui-control';
    }

    constructor(private __renderer: Renderer, private __elementRef: ElementRef) {
        super(__renderer, __elementRef);
        this.id = WeUIFormControl.registerControl();
    }

    /**
     * Write a new value to the element.
     *
     * @internal (From ControlValueAccessor interface)
     */
    writeValue(value: any): void {
        this._value = value;
    }

    /**
     * @internal (From ControlValueAccessor interface)
     */
    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}