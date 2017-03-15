<?php
namespace Grav\Plugin;
class FcHmacField extends \Twig_Extension
{
    public function getName()
    {
        return 'FcHmacField';
    }
    public function getFunctions()
    {
        return [
            new \Twig_SimpleFunction('hmac', [$this, 'hmacFunction'])
        ];
    }
    // public function hmacFunction($parameter)
    // {
    //     return 'something'.$parameter;
    // }

    public function hmacFunction($var_name, $var_value, $var_code, $var_parent_code = "", $for_value = false) {
        $api_key = "yWyk3zl8tihfIifdxyWAiizdR4UKRlpf9Nu2hG4BTbGsnQAQfmkszKAkIk1v";
        $encodingval = htmlspecialchars($var_code . $var_parent_code . $var_name . $var_value);
        $label = ($for_value) ? $var_value : $var_name;
        return $label . '||' . hash_hmac('sha256', $encodingval, $api_key) . ($var_value === "--OPEN--" ? "||open" : "");
    }
}