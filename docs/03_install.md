# 마크다운(Markdown) 주요 문법 예제

## 1. 제목(Heading)

# H1 제목
## H2 제목
### H3 제목
#### H4 제목
##### H5 제목
###### H6 제목

---

## 2. 글자 스타일

일반 글자  
**굵게(Bold)**  
*기울임(Italic)*  
***굵게 + 기울임***  
\~\~취소선(Strikethrough)\~\~

---

## 3. 목록(List)

### 3-1. 순서 없는 목록 (Unordered List)

- 항목 1
- 항목 2
  - 하위 항목 2-1
  - 하위 항목 2-2
    - 하위 항목 2-2-1
- 항목 3

### 3-2. 순서 있는 목록 (Ordered List)

1. 첫 번째
2. 두 번째
3. 세 번째
   1. 서브 3-1
   2. 서브 3-2

---

## 4. 링크(Link)와 이미지(Image)

### 4-1. 링크

[GitHub](https://github.com)  
[네이버](https://www.naver.com "네이버로 이동")

### 4-2. 이미지

기본 마크다운 이미지:

```markdown
![대체 텍스트](image/01/abc.jpg)


---
```markdown
일반 텍스트와 <span style="color:red">빨간 글자</span> 예제입니다.  
이것은 <span style="color:blue">파란 글자</span> 예제입니다.  
이것은 <span style="color:#00aa00">초록색(#00aa00) 글자</span> 예제입니다.

---
<div style="color:#ff6600">
이 문단 전체는 주황색(#ff6600)으로 표시됩니다.  
여러 줄을 작성해도 동일하게 적용됩니다.
</div>