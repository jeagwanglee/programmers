-- 코드를 입력하세요
SELECT MEMBER_NAME, REVIEW_TEXT, DATE_FORMAT(REVIEW_DATE, '%Y-%m-%d')AS REVIEW_DATE FROM MEMBER_PROFILE mr
JOIN REST_REVIEW rr ON mr.MEMBER_ID = rr.MEMBER_ID
WHERE mr.MEMBER_ID = (SELECT mr.MEMBER_ID FROM MEMBER_PROFILE mr
                JOIN REST_REVIEW rr ON mr.MEMBER_ID = rr.MEMBER_ID
                GROUP BY mr.MEMBER_ID
                ORDER BY COUNT(*) DESC
                LIMIT 1) 
ORDER BY REVIEW_DATE, REVIEW_TEXT

# SELECT mr.MEMBER_ID, COUNT(*) AS 리뷰개수 FROM MEMBER_PROFILE mr
#                 JOIN REST_REVIEW rr ON mr.MEMBER_ID = rr.MEMBER_ID
#                 GROUP BY MEMBER_ID
#                 ORDER BY 리뷰개수 DESC

# 작성한 리뷰 개수를 내림차순으로 정렬하고 최대 리뷰개수를 작성한 멤버들의 리뷰들을