# Freeeeeeeeeze.github.io
# 일단 여따쓰자
# kwater
기본적으로 train 데이터를 가지고 test 데이터를 예측하는데 제공되는 영상을 참고해서 얼마나 작동하는지 확인해야할것같음

대회에서 평가지표가 Macro F1 Score 가 사용된다는데 찾아보니 정밀도 와 재현율 조화 평균이라고함

TP (True Positives), FP (False Positives), FN (False Negatives)

TP (True Positives - 진양성):모델이 올바르게 예측하고 실제 라벨과 일치하는 경우를 나타냅니다

FP (False Positives - 가양성):모델이 잘못된 예측을 하고 양성 클래스로 예측하면서 실제로는 음성 클래스인 경우

FN (False Negatives - 가음성):모델이 잘못된 예측을 하고 음성 클래스로 예측하면서 실제로는 양성 클래스인 경우

정밀도 (Precision): TP / (TP + FP)
재현율 (Recall): TP / (TP + FN)
F1 스코어 (F1 Score): 2 * (정밀도 * 재현율) / (정밀도 + 재현율)

최종 예측은 NMS 적용 하라는데 그냥 중복데이터 없이 하라는데 사실 좀 애매해서 긴가민가함 이것도
