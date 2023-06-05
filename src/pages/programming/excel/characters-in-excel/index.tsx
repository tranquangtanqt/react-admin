import { PageTitle } from '../../../../components/modules/page-title';

export const ExcelCharactersInExcel = () => {
  return (
    <>
      <PageTitle title="Characters in Excel"></PageTitle>
      <div className="row mt-2">
        <div className="col-12 col-sm-12 col-md-12">
          <table className="table table-striped table-hover table-bordered table-sm">
            <thead>
              <tr className="table-dark">
                <th>Character Code</th>
                <th>Character Name</th>
                <th>CHAR Function</th>
                <th>CHAR Symbol</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>32</td>
                <td>Space</td>
                <td>=CHAR(32)</td>
                <td></td>
                <td>Punctuation</td>
              </tr>
              <tr>
                <td>33</td>
                <td>Exclamation mark</td>
                <td>=CHAR(33)</td>
                <td>!</td>
                <td>Punctuation</td>
              </tr>
              <tr>
                <td>34</td>
                <td>Double quotes (or speech marks)</td>
                <td>=CHAR(34)</td>
                <td>“</td>
                <td>Punctuation</td>
              </tr>
              <tr>
                <td>35</td>
                <td>Number</td>
                <td>=CHAR(35)</td>
                <td>#</td>
                <td>Punctuation</td>
              </tr>
              <tr>
                <td>36</td>
                <td>Dollar</td>
                <td>=CHAR(36)</td>
                <td>$</td>
                <td>Punctuation</td>
              </tr>
              <tr>
                <td>37</td>
                <td>Per cent sign</td>
                <td>=CHAR(37)</td>
                <td>%</td>
                <td>Punctuation</td>
              </tr>
              <tr>
                <td>38</td>
                <td>Ampersand</td>
                <td>=CHAR(38)</td>
                <td>&</td>
                <td>Punctuation</td>
              </tr>
              <tr>
                <td>39</td>
                <td>Single quote</td>
                <td>=CHAR(39)</td>
                <td>‘</td>
                <td>Punctuation</td>
              </tr>
              <tr>
                <td>40</td>
                <td>Open parenthesis (or open bracket)</td>
                <td>=CHAR(40)</td>
                <td>(</td>
                <td>Punctuation</td>
              </tr>
              <tr>
                <td>41</td>
                <td>Close parenthesis (or close bracket)</td>
                <td>=CHAR(41)</td>
                <td>)</td>
                <td>Punctuation</td>
              </tr>
              <tr>
                <td>42</td>
                <td>Asterisk</td>
                <td>=CHAR(42)</td>
                <td>*</td>
                <td>Punctuation</td>
              </tr>
              <tr>
                <td>43</td>
                <td>Plus</td>
                <td>=CHAR(43)</td>
                <td>+</td>
                <td>Punctuation</td>
              </tr>
              <tr>
                <td>44</td>
                <td>Comma</td>
                <td>=CHAR(44)</td>
                <td>,</td>
                <td>Punctuation</td>
              </tr>
              <tr>
                <td>45</td>
                <td>Hyphen</td>
                <td>=CHAR(45)</td>
                <td>–</td>
                <td>Punctuation</td>
              </tr>
              <tr>
                <td>46</td>
                <td>Period, dot or full stop</td>
                <td>=CHAR(46)</td>
                <td>.</td>
                <td>Punctuation</td>
              </tr>
              <tr>
                <td>47</td>
                <td>Slash or divide</td>
                <td>=CHAR(47)</td>
                <td>/</td>
                <td>Punctuation</td>
              </tr>
              <tr>
                <td>48</td>
                <td>Zero</td>
                <td>=CHAR(48)</td>
                <td>0</td>
                <td>Numbers</td>
              </tr>
              <tr>
                <td>49</td>
                <td>One</td>
                <td>=CHAR(49)</td>
                <td>1</td>
                <td>Numbers</td>
              </tr>
              <tr>
                <td>50</td>
                <td>Two</td>
                <td>=CHAR(50)</td>
                <td>2</td>
                <td>Numbers</td>
              </tr>
              <tr>
                <td>51</td>
                <td>Three</td>
                <td>=CHAR(51)</td>
                <td>3</td>
                <td>Numbers</td>
              </tr>
              <tr>
                <td>52</td>
                <td>Four</td>
                <td>=CHAR(52)</td>
                <td>4</td>
                <td>Numbers</td>
              </tr>
              <tr>
                <td>53</td>
                <td>Five</td>
                <td>=CHAR(53)</td>
                <td>5</td>
                <td>Numbers</td>
              </tr>
              <tr>
                <td>54</td>
                <td>Six</td>
                <td>=CHAR(54)</td>
                <td>6</td>
                <td>Numbers</td>
              </tr>
              <tr>
                <td>55</td>
                <td>Seven</td>
                <td>=CHAR(55)</td>
                <td>7</td>
                <td>Numbers</td>
              </tr>
              <tr>
                <td>56</td>
                <td>Eight</td>
                <td>=CHAR(56)</td>
                <td>8</td>
                <td>Numbers</td>
              </tr>
              <tr>
                <td>57</td>
                <td>Nine</td>
                <td>=CHAR(57)</td>
                <td>9</td>
                <td>Numbers</td>
              </tr>
              <tr>
                <td>58</td>
                <td>Colon</td>
                <td>=CHAR(58)</td>
                <td>:</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>59</td>
                <td>Semicolon</td>
                <td>=CHAR(59)</td>
                <td>;</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>60</td>
                <td>Less than (or open angled bracket)</td>
                <td>=CHAR(60)</td>
                <td>{'<'}</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>61</td>
                <td>Equals</td>
                <td>=CHAR(61)</td>
                <td>=</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>62</td>
                <td>Greater than (or close angled bracket)</td>
                <td>=CHAR(62)</td>
                <td>{'>'}</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>63</td>
                <td>Question mark</td>
                <td>=CHAR(63)</td>
                <td>?</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>64</td>
                <td>At symbol</td>
                <td>=CHAR(64)</td>
                <td>@</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>65</td>
                <td>Uppercase A</td>
                <td>=CHAR(65)</td>
                <td>A</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>66</td>
                <td>Uppercase B</td>
                <td>=CHAR(66)</td>
                <td>B</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>67</td>
                <td>Uppercase C</td>
                <td>=CHAR(67)</td>
                <td>C</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>68</td>
                <td>Uppercase D</td>
                <td>=CHAR(68)</td>
                <td>D</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>69</td>
                <td>Uppercase E</td>
                <td>=CHAR(69)</td>
                <td>E</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>70</td>
                <td>Uppercase F</td>
                <td>=CHAR(70)</td>
                <td>F</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>71</td>
                <td>Uppercase G</td>
                <td>=CHAR(71)</td>
                <td>G</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>72</td>
                <td>Uppercase H</td>
                <td>=CHAR(72)</td>
                <td>H</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>73</td>
                <td>Uppercase I</td>
                <td>=CHAR(73)</td>
                <td>I</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>74</td>
                <td>Uppercase J</td>
                <td>=CHAR(74)</td>
                <td>J</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>75</td>
                <td>Uppercase K</td>
                <td>=CHAR(75)</td>
                <td>K</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>76</td>
                <td>Uppercase L</td>
                <td>=CHAR(76)</td>
                <td>L</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>77</td>
                <td>Uppercase M</td>
                <td>=CHAR(77)</td>
                <td>M</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>78</td>
                <td>Uppercase N</td>
                <td>=CHAR(78)</td>
                <td>N</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>79</td>
                <td>Uppercase O</td>
                <td>=CHAR(79)</td>
                <td>O</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>80</td>
                <td>Uppercase P</td>
                <td>=CHAR(80)</td>
                <td>P</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>81</td>
                <td>Uppercase Q</td>
                <td>=CHAR(81)</td>
                <td>Q</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>82</td>
                <td>Uppercase R</td>
                <td>=CHAR(82)</td>
                <td>R</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>83</td>
                <td>Uppercase S</td>
                <td>=CHAR(83)</td>
                <td>S</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>84</td>
                <td>Uppercase T</td>
                <td>=CHAR(84)</td>
                <td>T</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>85</td>
                <td>Uppercase U</td>
                <td>=CHAR(85)</td>
                <td>U</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>86</td>
                <td>Uppercase V</td>
                <td>=CHAR(86)</td>
                <td>V</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>87</td>
                <td>Uppercase W</td>
                <td>=CHAR(87)</td>
                <td>W</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>88</td>
                <td>Uppercase X</td>
                <td>=CHAR(88)</td>
                <td>X</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>89</td>
                <td>Uppercase Y</td>
                <td>=CHAR(89)</td>
                <td>Y</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>90</td>
                <td>Uppercase Z</td>
                <td>=CHAR(90)</td>
                <td>Z</td>
                <td>Letters (Upper Case)</td>
              </tr>
              <tr>
                <td>91</td>
                <td>Opening bracket</td>
                <td>=CHAR(91)</td>
                <td>[</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>92</td>
                <td>Backslash</td>
                <td>=CHAR(92)</td>
                <td>\</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>93</td>
                <td>Closing bracket</td>
                <td>=CHAR(93)</td>
                <td>]</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>94</td>
                <td>Caret – circumflex</td>
                <td>=CHAR(94)</td>
                <td>^</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>95</td>
                <td>Underscore</td>
                <td>=CHAR(95)</td>
                <td>_</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>96</td>
                <td>Grave accent</td>
                <td>=CHAR(96)</td>
                <td>`</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>97</td>
                <td>Lowercase a</td>
                <td>=CHAR(97)</td>
                <td>a</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>98</td>
                <td>Lowercase b</td>
                <td>=CHAR(98)</td>
                <td>b</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>99</td>
                <td>Lowercase c</td>
                <td>=CHAR(99)</td>
                <td>c</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>100</td>
                <td>Lowercase d</td>
                <td>=CHAR(100)</td>
                <td>d</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>101</td>
                <td>Lowercase e</td>
                <td>=CHAR(101)</td>
                <td>e</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>102</td>
                <td>Lowercase f</td>
                <td>=CHAR(102)</td>
                <td>f</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>103</td>
                <td>Lowercase g</td>
                <td>=CHAR(103)</td>
                <td>g</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>104</td>
                <td>Lowercase h</td>
                <td>=CHAR(104)</td>
                <td>h</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>105</td>
                <td>Lowercase i</td>
                <td>=CHAR(105)</td>
                <td>i</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>106</td>
                <td>Lowercase j</td>
                <td>=CHAR(106)</td>
                <td>j</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>107</td>
                <td>Lowercase k</td>
                <td>=CHAR(107)</td>
                <td>k</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>108</td>
                <td>Lowercase l</td>
                <td>=CHAR(108)</td>
                <td>l</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>109</td>
                <td>Lowercase m</td>
                <td>=CHAR(109)</td>
                <td>m</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>110</td>
                <td>Lowercase n</td>
                <td>=CHAR(110)</td>
                <td>n</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>111</td>
                <td>Lowercase o</td>
                <td>=CHAR(111)</td>
                <td>o</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>112</td>
                <td>Lowercase p</td>
                <td>=CHAR(112)</td>
                <td>p</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>113</td>
                <td>Lowercase q</td>
                <td>=CHAR(113)</td>
                <td>q</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>114</td>
                <td>Lowercase r</td>
                <td>=CHAR(114)</td>
                <td>r</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>115</td>
                <td>Lowercase s</td>
                <td>=CHAR(115)</td>
                <td>s</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>116</td>
                <td>Lowercase t</td>
                <td>=CHAR(116)</td>
                <td>t</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>117</td>
                <td>Lowercase u</td>
                <td>=CHAR(117)</td>
                <td>u</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>118</td>
                <td>Lowercase v</td>
                <td>=CHAR(118)</td>
                <td>v</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>119</td>
                <td>Lowercase w</td>
                <td>=CHAR(119)</td>
                <td>w</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>120</td>
                <td>Lowercase x</td>
                <td>=CHAR(120)</td>
                <td>x</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>121</td>
                <td>Lowercase y</td>
                <td>=CHAR(121)</td>
                <td>y</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>122</td>
                <td>Lowercase z</td>
                <td>=CHAR(122)</td>
                <td>z</td>
                <td>Letters (Lower Case)</td>
              </tr>
              <tr>
                <td>123</td>
                <td>Opening brace</td>
                <td>=CHAR(123)</td>
                <td>{'{'}</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>124</td>
                <td>Vertical bar</td>
                <td>=CHAR(124)</td>
                <td>|</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>125</td>
                <td>Closing brace</td>
                <td>=CHAR(125)</td>
                <td>{'}'}</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>126</td>
                <td>Equivalency sign – tilde</td>
                <td>=CHAR(126)</td>
                <td>~</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>127</td>
                <td>Delete</td>
                <td>=CHAR(127)</td>
                <td></td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>128</td>
                <td>Euro sign</td>
                <td>=CHAR(128)</td>
                <td>€</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>130</td>
                <td>Latin small letter f with hook</td>
                <td>=CHAR(130)</td>
                <td>‚</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>131</td>
                <td>Double low-9 quotation mark</td>
                <td>=CHAR(131)</td>
                <td>ƒ</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>132</td>
                <td>Horizontal ellipsis</td>
                <td>=CHAR(132)</td>
                <td>„</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>133</td>
                <td>Dagger</td>
                <td>=CHAR(133)</td>
                <td>…</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>134</td>
                <td>Double dagger</td>
                <td>=CHAR(134)</td>
                <td>†</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>135</td>
                <td>Modifier letter circumflex accent</td>
                <td>=CHAR(135)</td>
                <td>‡</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>137</td>
                <td>Per mille sign</td>
                <td>=CHAR(137)</td>
                <td>‰</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>138</td>
                <td>Latin capital letter S with caron</td>
                <td>=CHAR(138)</td>
                <td>Š</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>139</td>
                <td>Single left-pointing angle quotation</td>
                <td>=CHAR(139)</td>
                <td>‹</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>140</td>
                <td>Latin capital ligature OE</td>
                <td>=CHAR(140)</td>
                <td>Œ</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>142</td>
                <td>Latin capital letter Z with caron</td>
                <td>=CHAR(142)</td>
                <td>Ž</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>145</td>
                <td>Left single quotation mark</td>
                <td>=CHAR(145)</td>
                <td>‘</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>146</td>
                <td>Right single quotation mark</td>
                <td>=CHAR(146)</td>
                <td>’</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>147</td>
                <td>Left double quotation mark</td>
                <td>=CHAR(147)</td>
                <td>“</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>148</td>
                <td>Right double quotation mark</td>
                <td>=CHAR(148)</td>
                <td>”</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>149</td>
                <td>Bullet</td>
                <td>=CHAR(149)</td>
                <td>•</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>150</td>
                <td>En dash</td>
                <td>=CHAR(150)</td>
                <td>–</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>151</td>
                <td>Em dash</td>
                <td>=CHAR(151)</td>
                <td>—</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>152</td>
                <td>Small tilde</td>
                <td>=CHAR(152)</td>
                <td>˜</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>153</td>
                <td>Trade mark sign</td>
                <td>=CHAR(153)</td>
                <td>™</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>154</td>
                <td>Latin small letter S with caron</td>
                <td>=CHAR(154)</td>
                <td>š</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>155</td>
                <td>Single right-pointing angle quotation mark</td>
                <td>=CHAR(155)</td>
                <td>›</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>156</td>
                <td>Latin small ligature oe</td>
                <td>=CHAR(156)</td>
                <td>œ</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>158</td>
                <td>Latin small letter z with caron</td>
                <td>=CHAR(158)</td>
                <td>ž</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>159</td>
                <td>Latin capital letter Y with diaeresis</td>
                <td>=CHAR(159)</td>
                <td>Ÿ</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>160</td>
                <td>Non-breaking space</td>
                <td>=CHAR(160)</td>
                <td></td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>161</td>
                <td>Inverted exclamation mark</td>
                <td>=CHAR(161)</td>
                <td>¡</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>162</td>
                <td>Cent sign</td>
                <td>=CHAR(162)</td>
                <td>¢</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>163</td>
                <td>Pound sign</td>
                <td>=CHAR(163)</td>
                <td>£</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>164</td>
                <td>Currency sign</td>
                <td>=CHAR(164)</td>
                <td>¤</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>165</td>
                <td>Yen sign</td>
                <td>=CHAR(165)</td>
                <td>¥</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>166</td>
                <td>Pipe, Broken vertical bar</td>
                <td>=CHAR(166)</td>
                <td>¦</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>167</td>
                <td>Section sign</td>
                <td>=CHAR(167)</td>
                <td>§</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>168</td>
                <td>Spacing diaeresis – umlaut</td>
                <td>=CHAR(168)</td>
                <td>¨</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>169</td>
                <td>Copyright sign</td>
                <td>=CHAR(169)</td>
                <td>©</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>170</td>
                <td>Feminine ordinal indicator</td>
                <td>=CHAR(170)</td>
                <td>ª</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>171</td>
                <td>Left double angle quotes</td>
                <td>=CHAR(171)</td>
                <td>«</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>172</td>
                <td>Not sign</td>
                <td>=CHAR(172)</td>
                <td>¬</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>173</td>
                <td>Soft hyphen</td>
                <td>=CHAR(173)</td>
                <td>­</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>174</td>
                <td>Registered trade mark sign</td>
                <td>=CHAR(174)</td>
                <td>®</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>175</td>
                <td>Spacing macron – overline</td>
                <td>=CHAR(175)</td>
                <td>¯</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>176</td>
                <td>Degree sign</td>
                <td>=CHAR(176)</td>
                <td>°</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>177</td>
                <td>Plus-or-minus sign</td>
                <td>=CHAR(177)</td>
                <td>±</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>178</td>
                <td>Superscript two – squared</td>
                <td>=CHAR(178)</td>
                <td>²</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>179</td>
                <td>Superscript three – cubed</td>
                <td>=CHAR(179)</td>
                <td>³</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>180</td>
                <td>Acute accent – spacing acute</td>
                <td>=CHAR(180)</td>
                <td>´</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>181</td>
                <td>Micro sign</td>
                <td>=CHAR(181)</td>
                <td>µ</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>182</td>
                <td>Pilcrow sign – paragraph sign</td>
                <td>=CHAR(182)</td>
                <td>¶</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>183</td>
                <td>Middle dot – Georgian comma</td>
                <td>=CHAR(183)</td>
                <td>·</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>184</td>
                <td>Spacing cedilla</td>
                <td>=CHAR(184)</td>
                <td>¸</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>185</td>
                <td>Superscript one</td>
                <td>=CHAR(185)</td>
                <td>¹</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>186</td>
                <td>Masculine ordinal indicator</td>
                <td>=CHAR(186)</td>
                <td>º</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>187</td>
                <td>Right double angle quotes</td>
                <td>=CHAR(187)</td>
                <td>»</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>188</td>
                <td>Fraction one quarter</td>
                <td>=CHAR(188)</td>
                <td>¼</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>189</td>
                <td>Fraction one half</td>
                <td>=CHAR(189)</td>
                <td>½</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>190</td>
                <td>Fraction three quarters</td>
                <td>=CHAR(190)</td>
                <td>¾</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>191</td>
                <td>Inverted question mark</td>
                <td>=CHAR(191)</td>
                <td>¿</td>
                <td>Special Characters</td>
              </tr>
              <tr>
                <td>192</td>
                <td>Latin capital letter A with grave</td>
                <td>=CHAR(192)</td>
                <td>À</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>193</td>
                <td>Latin capital letter A with acute</td>
                <td>=CHAR(193)</td>
                <td>Á</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>194</td>
                <td>Latin capital letter A with circumflex</td>
                <td>=CHAR(194)</td>
                <td>Â</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>195</td>
                <td>Latin capital letter A with tilde</td>
                <td>=CHAR(195)</td>
                <td>Ã</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>196</td>
                <td>Latin capital letter A with diaeresis</td>
                <td>=CHAR(196)</td>
                <td>Ä</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>197</td>
                <td>Latin capital letter A with ring above</td>
                <td>=CHAR(197)</td>
                <td>Å</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>198</td>
                <td>Latin capital letter AE</td>
                <td>=CHAR(198)</td>
                <td>Æ</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>199</td>
                <td>Latin capital letter C with cedilla</td>
                <td>=CHAR(199)</td>
                <td>Ç</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>200</td>
                <td>Latin capital letter E with grave</td>
                <td>=CHAR(200)</td>
                <td>È</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>201</td>
                <td>Latin capital letter E with acute</td>
                <td>=CHAR(201)</td>
                <td>É</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>202</td>
                <td>Latin capital letter E with circumflex</td>
                <td>=CHAR(202)</td>
                <td>Ê</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>203</td>
                <td>Latin capital letter E with diaeresis</td>
                <td>=CHAR(203)</td>
                <td>Ë</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>204</td>
                <td>Latin capital letter I with grave</td>
                <td>=CHAR(204)</td>
                <td>Ì</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>205</td>
                <td>Latin capital letter I with acute</td>
                <td>=CHAR(205)</td>
                <td>Í</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>206</td>
                <td>Latin capital letter I with circumflex</td>
                <td>=CHAR(206)</td>
                <td>Î</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>207</td>
                <td>Latin capital letter I with diaeresis</td>
                <td>=CHAR(207)</td>
                <td>Ï</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>208</td>
                <td>Latin capital letter ETH</td>
                <td>=CHAR(208)</td>
                <td>Ð</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>209</td>
                <td>Latin capital letter N with tilde</td>
                <td>=CHAR(209)</td>
                <td>Ñ</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>210</td>
                <td>Latin capital letter O with grave</td>
                <td>=CHAR(210)</td>
                <td>Ò</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>211</td>
                <td>Latin capital letter O with acute</td>
                <td>=CHAR(211)</td>
                <td>Ó</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>212</td>
                <td>Latin capital letter O with circumflex</td>
                <td>=CHAR(212)</td>
                <td>Ô</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>213</td>
                <td>Latin capital letter O with tilde</td>
                <td>=CHAR(213)</td>
                <td>Õ</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>214</td>
                <td>Latin capital letter O with diaeresis</td>
                <td>=CHAR(214)</td>
                <td>Ö</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>215</td>
                <td>Multiplication sign</td>
                <td>=CHAR(215)</td>
                <td>×</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>216</td>
                <td>Latin capital letter O with slash</td>
                <td>=CHAR(216)</td>
                <td>Ø</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>217</td>
                <td>Latin capital letter U with grave</td>
                <td>=CHAR(217)</td>
                <td>Ù</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>218</td>
                <td>Latin capital letter U with acute</td>
                <td>=CHAR(218)</td>
                <td>Ú</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>219</td>
                <td>Latin capital letter U with circumflex</td>
                <td>=CHAR(219)</td>
                <td>Û</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>220</td>
                <td>Latin capital letter U with diaeresis</td>
                <td>=CHAR(220)</td>
                <td>Ü</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>221</td>
                <td>Latin capital letter Y with acute</td>
                <td>=CHAR(221)</td>
                <td>Ý</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>222</td>
                <td>Latin capital letter THORN</td>
                <td>=CHAR(222)</td>
                <td>Þ</td>
                <td>Upper Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>223</td>
                <td>Latin small letter sharp s – ess-zed</td>
                <td>=CHAR(223)</td>
                <td>ß</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>224</td>
                <td>Latin small letter a with grave</td>
                <td>=CHAR(224)</td>
                <td>à</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>225</td>
                <td>Latin small letter a with acute</td>
                <td>=CHAR(225)</td>
                <td>á</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>226</td>
                <td>Latin small letter a with circumflex</td>
                <td>=CHAR(226)</td>
                <td>â</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>227</td>
                <td>Latin small letter a with tilde</td>
                <td>=CHAR(227)</td>
                <td>ã</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>228</td>
                <td>Latin small letter a with diaeresis</td>
                <td>=CHAR(228)</td>
                <td>ä</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>229</td>
                <td>Latin small letter a with ring above</td>
                <td>=CHAR(229)</td>
                <td>å</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>230</td>
                <td>Latin small letter ae</td>
                <td>=CHAR(230)</td>
                <td>æ</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>231</td>
                <td>Latin small letter c with cedilla</td>
                <td>=CHAR(231)</td>
                <td>ç</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>232</td>
                <td>Latin small letter e with grave</td>
                <td>=CHAR(232)</td>
                <td>è</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>233</td>
                <td>Latin small letter e with acute</td>
                <td>=CHAR(233)</td>
                <td>é</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>234</td>
                <td>Latin small letter e with circumflex</td>
                <td>=CHAR(234)</td>
                <td>ê</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>235</td>
                <td>Latin small letter e with diaeresis</td>
                <td>=CHAR(235)</td>
                <td>ë</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>236</td>
                <td>Latin small letter i with grave</td>
                <td>=CHAR(236)</td>
                <td>ì</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>237</td>
                <td>Latin small letter i with acute</td>
                <td>=CHAR(237)</td>
                <td>í</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>238</td>
                <td>Latin small letter i with circumflex</td>
                <td>=CHAR(238)</td>
                <td>î</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>239</td>
                <td>Latin small letter i with diaeresis</td>
                <td>=CHAR(239)</td>
                <td>ï</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>240</td>
                <td>Latin small letter eth</td>
                <td>=CHAR(240)</td>
                <td>ð</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>241</td>
                <td>Latin small letter n with tilde</td>
                <td>=CHAR(241)</td>
                <td>ñ</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>242</td>
                <td>Latin small letter o with grave</td>
                <td>=CHAR(242)</td>
                <td>ò</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>243</td>
                <td>Latin small letter o with acute</td>
                <td>=CHAR(243)</td>
                <td>ó</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>244</td>
                <td>Latin small letter o with circumflex</td>
                <td>=CHAR(244)</td>
                <td>ô</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>245</td>
                <td>Latin small letter o with tilde</td>
                <td>=CHAR(245)</td>
                <td>õ</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>246</td>
                <td>Latin small letter o with diaeresis</td>
                <td>=CHAR(246)</td>
                <td>ö</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>247</td>
                <td>Division sign</td>
                <td>=CHAR(247)</td>
                <td>÷</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>248</td>
                <td>Latin small letter o with slash</td>
                <td>=CHAR(248)</td>
                <td>ø</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>249</td>
                <td>Latin small letter u with grave</td>
                <td>=CHAR(249)</td>
                <td>ù</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>250</td>
                <td>Latin small letter u with acute</td>
                <td>=CHAR(250)</td>
                <td>ú</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>251</td>
                <td>Latin small letter u with circumflex</td>
                <td>=CHAR(251)</td>
                <td>û</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>252</td>
                <td>Latin small letter u with diaeresis</td>
                <td>=CHAR(252)</td>
                <td>ü</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>253</td>
                <td>Latin small letter y with acute</td>
                <td>=CHAR(253)</td>
                <td>ý</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>254</td>
                <td>Latin small letter thorn</td>
                <td>=CHAR(254)</td>
                <td>þ</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
              <tr>
                <td>255</td>
                <td>Latin small letter y with diaeresis</td>
                <td>=CHAR(255)</td>
                <td>ÿ</td>
                <td>Lower Case Latin-1 Letters</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
